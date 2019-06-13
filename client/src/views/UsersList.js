/**
 * Dependencies
 */

import axios from 'axios'
import React, { Component } from 'react'
import { UsersListStyle } from './styles/index'
import '../auth/addInterceptors'
import requiresAuth from '../auth/requiresAuth'

/**
 * Define component
 */

class UsersList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/users')
      .then(res => {
        this.setState(() => ({ users: res.data }))
      })
      .catch(({ response }) => {
        console.error(response)
      })
  }

  handleSignOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('jwt')
    this.props.history.push('/users/signin')
  }

  render() {
    return (
      <UsersListStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Users List</h3>

              <a href="#" onClick={this.handleSignOut}>Sign out</a>

              <ul>
                {this.state.users.map(user => (
                  <li key={user.id}>{user.username}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </UsersListStyle>
    )
  }
}

/**
 * Export component
 */

export default requiresAuth(UsersList)
