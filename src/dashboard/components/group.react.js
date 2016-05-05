const React = require('react')

module.exports = React.createClass({
  render: function() {

    return (

      <div className='group'>
        <div className='group-name'>{this.props.name} [group]</div>
      </div>

    )
  }
})
