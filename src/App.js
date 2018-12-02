import React, { Component } from 'react';
import './App.css';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList />
        <div className='song-detail'>
          <SongDetail />
        </div>
      </div>
    );
  }
}

export default App;
