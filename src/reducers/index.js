import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'gummo', duration: '4:05' },
        { title: 'bodak yellow', duration: '4:05' },
        { title: 'love scars', duration: '4:05' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})