import Auth0Lock from 'auth0-lock'
// import { browserHistory } from 'react-router'

export default class Auth {
  constructor(clientId, domain, options) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, options)
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)

    this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        console.log('err', error)
        return;
      }

      console.log('auth', authResult);
      console.log('profile', profile);
      // browserHistory.replace('/customRoute')
    })

  }


  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  setUser(user) {
    // Saves user token to local storage
    localStorage.setItem('user', user)
  }

  getUser() {
    // Retrieves the user token from local storage
    return localStorage.getItem('user')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}