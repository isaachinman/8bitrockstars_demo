const React = require('react')
const ReactDOM = require('react-dom')

const Dashboard = require('./components/dashboard.react')

if ($('#dashboard').length) {
  ReactDOM.render(
    <Dashboard />, document.querySelector('#dashboard')
  )
}
