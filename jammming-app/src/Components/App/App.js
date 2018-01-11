import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';
class App extends Component {

  /***********************************************/
  constructor(props){
    super(props);

    this.state = {
      searchResults: [{name: 'Blame it on me', artist: 'George Ezra', album: 'Wanted On Voyage'},
                      {name: 'Budapest', artist: 'George Ezra', album: 'Wanted On Voyage'}],
      playlistName: 'George Ezra',
      playlistTracks: [{name: 'Blame it on me', artist: 'George Ezra', album: 'Wanted On Voyage'},
                      {name: 'Budapest', artist: 'George Ezra', album: 'Wanted On Voyage'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist =this.savePlaylist.bind(this);
    this.search=this.search.bind(this);
  }
  /***********************************************/
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.includes(track)) {
      console.log('Already in playlist.');
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let tracks=this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackURIs= this.state.playlistTracks.map((track) => {track.uri})
  }

  search(term) {
    console.log(term);
  }
  /***********************************************/
  render() {
    return (
      <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search}/>
                <div className="App-playlist">
                  <SearchResults
                    searchResults ={this.state.searchResults}
                    onAdd={this.addTrack}
                  />
                  <Playlist
                    playlistName = {this.state.playlistName}
                    playlistTracks ={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist}
                  />
                </div>
            </div>
      </div>
    );
  }
}

export default App;
