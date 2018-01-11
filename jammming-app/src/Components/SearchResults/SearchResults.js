import React, {Component} from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist.js'
class SearchResults extends Component {
  render(){
    return(
      <div className="SearchResults">

          <h2>Results</h2>

          <Tracklist
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={this.props.isRemoval}
          />
      </div>
    );
  }
}
 export default SearchResults;
