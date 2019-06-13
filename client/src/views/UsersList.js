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

  onComponentDidMount() {
    const endpoint = '/users'

    axios
      .get(endpoint)
      .then(res => {
        this.setState(() => ({ users: res.data }))
      })
      .catch(({ response }) => {
        console.error(response)
      })
  }

  render() {
    return (
      <UsersListStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Users List</h3>

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
