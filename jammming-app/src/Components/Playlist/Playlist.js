import React, {Component} from 'react';
import Tracklist from '../Tracklist/Tracklist.js';
import './Playlist.css';
class Playlist extends Component {
  constructor(props){
    super(props);

    this.handleNameChange=this.handleNameChange.bind(this);
  }
  /***********************************************/
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  /***********************************************/
  render(){
    return(

        <div className="Playlist">
            <input defaultValue={this.props.playlistName} onChange={this.props.handleNameChange}/>
            <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
            <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>

    );
  }
}
export default Playlist;
