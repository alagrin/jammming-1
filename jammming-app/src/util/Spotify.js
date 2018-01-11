let accessToken ='';
let Spotify ={
  getAccessToken(){
    if(accessToken) {
      return accessToken;
    }
    let accessTokenWindow = window.location.href.match(/access_token=([^&]*)/);
    let expiresInWindow = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenWindow && expiresInWindow) {
      
    }
  }
};
export default Spotify;
