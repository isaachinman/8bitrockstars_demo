const React = require('react')
const User = require('./user.react')
const Group = require('./group.react')

module.exports = React.createClass({
  getInitialState: function() {
    return { users: [], groups: [], modalIsOpen: false }
  },
  openUserModal: function() {
    this.setState({ userModalIsOpen: true })
  },
  closeUserModal: function() {
    this.setState({ userModalIsOpen: false })
  },
  openGroupModal: function() {
    this.setState({ groupModalIsOpen: true })
  },
  closeGroupModal: function() {
    this.setState({ groupModalIsOpen: false })
  },
  addUser: function(e) {

    e.preventDefault()

    // Create a new user with the provided details
    var newUsers = this.state.users.concat({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      birthDate: e.target[2].value
    })

    // Reset the user form
    e.target.reset()

    // Set new state
    this.setState({
      users: newUsers,
      userModalIsOpen: false
    })

  },
  addGroup: function(e) {

    e.preventDefault()

    // Create a new group with the provided details
    var newGroups = this.state.groups.concat([
      <Group
        name={e.target[0].value}
      />
    ])

    // Reset the group form
    e.target.reset()

    // Set new state
    this.setState({
      groups: newGroups,
      groupModalIsOpen: false
    })

  },
  render: function() {

    // This is the boolean that controls the visibility of the add user modal
    var userModalIsVisible = {display:'none'}
    if (this.state.userModalIsOpen) {
      userModalIsVisible.display = 'block'
    }

    // This is the boolean that controls the visibility of the add group modal
    var groupModalIsVisible = {display:'none'}
    if (this.state.groupModalIsOpen) {
      groupModalIsVisible.display = 'block'
    }

    // Compile users
    var users = []
    for (var i=0; i<this.state.users.length; i++) {
      users.push(
        <User
          firstName={this.state.users[i].firstName}
          lastName={this.state.users[i].lastName}
          birthDate={this.state.users[i].birthDate}
          groups={this.state.groups}
        />
      )
    }

    // Compile groups
    var groups = null
    if (this.state.groups.length > 0) {
      groups = 'Groups: '

      // For each group, add the name to a list
      for (var i=0; i<this.state.groups.length; i++) {
        groups += this.state.groups[i].props.name

        // As long as this group isn't the last, add a comma after
        if (i !== (this.state.groups.length -1)) {
          groups += ', '
        }
      }
    }

    return (

      <div className='dashboard'>

        <nav><h1>Dashboard</h1></nav>

        <div className='btn btn--circle add-user' onClick={this.openUserModal}>+</div>

        <div className='user-management'>

          {users}

          <div className='group-container'>
            {groups}
          </div>

          <div className='create-group' onClick={this.openGroupModal}>Create group</div>

        </div>

        <div className='modal' style={userModalIsVisible}>
          <div className='overlay' onClick={this.closeUserModal}></div>
          <div className='modal-content'>
            <div className='close-modal' onClick={this.closeUserModal}>x</div>
            <div className='title'>Add a new user</div>
            <div className='content'>
              <form className='add-new-user' onSubmit={this.addUser}>
                <input type='text' name='first-name' required='required' length='30' placeholder="First name" required='required' />
                <input type='text' name='last-name' required='required' length='30' placeholder="Last name" required='required' />
                <input type='date' name='birthday' required='required' placeholder="Date of birth" required='required' />
                <button type='submit' className='btn'>Create user</button>
              </form>
            </div>
          </div>
        </div>

        <div className='modal' style={groupModalIsVisible}>
          <div className='overlay' onClick={this.closeGroupModal}></div>
          <div className='modal-content'>
            <div className='close-modal' onClick={this.closeGroupModal}>x</div>
            <div className='title'>Add a new group</div>
            <div className='content'>
              <form className='add-new-user' onSubmit={this.addGroup}>
                <input type='text' name='name' required='required' placeholder="Group name" length='30' required='required' />
                <button type='submit' className='btn'>Create group</button>
              </form>
            </div>
          </div>
        </div>

      </div>

    )
  }
});
