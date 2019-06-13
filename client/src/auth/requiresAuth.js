/**
 * Dependencies
 */

import React, { Component } from 'react'
import axios from 'axios'

/**
 * Constants
 */

const token = localStorage.getItem('jwt')
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080'

/**
 * Define auth
 */

function requiresAuth(Component) {
  return class Authenticated extends Component {
    render() {
      const notLoggedIn = <div>Please login to see our users</div>

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
    }
  }
}

/**
 * Export auth
 */

export default requiresAuth
