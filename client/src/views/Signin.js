/**
 * Dependencies
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { SigninStyle } from './styles/index'

/**
 * Define component
 */

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Signin')
  }

  handleOnChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <SigninStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Signin</h3>

              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" required id="input-username" label="username" onChange={this.handleOnChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" required id="input-password" label="password" onChange={this.handleOnChange} className="form-control" />
                </div>

                <button type="submit">
                  Continue
                </button>
              </form>

              <br/>

              <p>I don't have an account: <NavLink to="/users/signup">Sign up</NavLink></p>

            </div>
          </div>
        </div>
      </SigninStyle>
    )
  }
}

/**
 * Export component
 */

export default Signin
