import React, {Component} from 'react';
import './Tracklist.css';
import Track from '../Track/Track.js';

class Tracklist extends Component {
  render(){
    return(
      <div className="TrackList">
        {this.props.tracks.map(track=> {
          return <Track key={track.id} track={track} onRemove={this.props.onRemove}/>
        })}
      </div>
    );
  }
}
export default Tracklist;
