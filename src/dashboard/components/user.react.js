const React = require('react')

module.exports = React.createClass({
  render: function() {

    var select = null

    // Only render group dropdown if there are actually groups
    if (this.props.groups.length > 0) {
      var options = []
      for (var i=0; i<this.props.groups.length; i++) {
        options.push(
          <option>{this.props.groups[i].props.name}</option>
        )
      }
      select = <div className='styled-select'><select>{options}</select></div>
    }



    return (

      <div className='user'>
        <div className='user-name'>{this.props.firstName} {this.props.lastName}</div>
        <div className='user-birthday'>{this.props.birthDate}</div>
        <div className='group-select'>
          {select}
        </div>
      </div>

    )
  }
})
