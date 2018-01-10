import React, {Component} from 'react';
import Tracklist from '../Tracklist/Tracklist.js';
import './Playlist.css';
class Playlist extends Component {
  render(){
    return(

        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            {/* <Tracklist/> */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>

    );
  }
}
export default Playlist;
