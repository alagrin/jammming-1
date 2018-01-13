const clientID = '5fa558d53ce941068717569b26d3c2bb';
const redirectURI = "http://localhost:3000/";

let accessToken, expiresIn;

let Spotify ={

  getAccessToken()
  {
    if(accessToken) {
      return accessToken;
    }

    let accessTokenMatch
      = window.location.href.match(/access_token=([^&]*)/);


    let expiresInMatch
      = window.location.href.match(/expires_in=([^&]*)/);


    if (accessTokenMatch && expiresInMatch)
    {
      accessToken = accessTokenMatch[1];

      //let expiresIn = Number(expiresInMatch[1]);
      expiresIn = expiresInMatch[1];

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },
  search(term)
   {
     const searchURL = `https://api.spotify.com/v1/search?type=track&q=${term}&limit=12`;

     return fetch(searchURL, {headers: {Authorization: `Bearer ${accessToken}`}})

       .then(response => response.json())


         .then(jsonResponse =>
           {
             if(jsonResponse.tracks)
             {
               return jsonResponse.tracks.items.map(track => {
                   return {
                     id: track.id,
                     name: track.name,
                     artist: track.artists[0].name,
                     album: track.album.name,
                     uri: track.uri
                   };
                 }
               );
             }
             else
               return [];
           }
         );
   },

  savePlaylist(playlistName, trackUris)
  {
    console.log(playlistName);
    console.log(trackUris);

    if (!playlistName || !trackUris) {

      console.log

      return;
    }

    let accessToken = Spotify.getAccessToken();

    //console.log(accessToken);

    let headers = {
      Authorization: 'Bearer ' + accessToken
    };

    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers})
      .then(response => response.json())
      .then(jsonResponse =>
      {
        userId = jsonResponse.id;

        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
		    	method: 'POST',
		    	body: JSON.stringify({name: playlistName})})
          .then(response => response.json())
          .then(jsonResponse => {

            let playlistID = jsonResponse.id;

            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`,
            {
              headers: headers,
		      	  method: 'POST',
		      	  body: JSON.stringify({uris: trackUris})});
            }
          );
        })
      }
};
export default Spotify;
