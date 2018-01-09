import React, {Component} from 'react';
import './SearchResults.css';
class SearchResults extends Component {
  render(){
    return(
      <div className="SearchResults">
          <h2>Results</h2>
          <Playlist />
      </div>
    );
  }
}
 export default SearchResults;
