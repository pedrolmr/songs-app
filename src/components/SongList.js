import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
    render(){
        return this.props.songs.map(song => {
            return(
                <div className="song-list" key={song.title}>
                    <button onClick={() => this.props.selectSong(song)}>Select</button>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);