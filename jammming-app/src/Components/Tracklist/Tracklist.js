import React, {Component} from 'react';
import './Tracklist.css';
import Track from '../Track/Track.js';

class Tracklist extends Component {
  render(){
    return(
      <div className="TrackList">
        {this.props.tracks.map(track =>
          //{
            //return
              <Track
                key={track.id}
                // key={track.name}
                track={track}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              />
          //}
        )
      }
      </div>

    );
  }
}
export default Tracklist;
