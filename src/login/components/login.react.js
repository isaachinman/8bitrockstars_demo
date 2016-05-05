const React = require('react')

module.exports = React.createClass({
  validateCredentials: function(e) {

    // Prevent form submitting
    e.preventDefault()

    // Do some AJAX stuff to validate user credentials, let's pretend for now
    let validCredentials = true
    if (validCredentials) {
      this.login('fake token')
    }

  },
  login: function(fakeToken) {

    // Set our fake token into local storage
    localStorage.setItem('JWT', fakeToken)

    // Proceed to logged-in area
    window.location = '/dashboard'

  },
  render: function() {

    return (

      // Using a form here to leverage native browser validation
      <form className='login-module' onSubmit={this.validateCredentials}>
        <h1>Login</h1>
        <div className='label'>Email</div>
        <input type='email' name='email' className='login-input' placeholder='Email' required='required' />
        <div className='label'>Password</div>
        <input type='password' name='password' className='login-input' placeholder='Password' required='required' />
        <div className='remember-me'>
          <input type='checkbox' />
          <span>Remember me</span>
        </div>
        <button type='submit' className='btn sign-in'>Sign in</button>
      </form>

    )
  }
});
