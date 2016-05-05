const React = require('react')
const ReactDOM = require('react-dom')

const Login = require('./components/login.react')

if ($('#login').length) {
  ReactDOM.render(
    <Login />, document.querySelector('#login')
  )
}
