/**
 * Dependencies
 */

import React, { Component } from 'react'
import { SignupStyle } from './styles/index'

/**
 * Define component
 */

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Signup')
  }

  handleOnChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <SignupStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Signup</h3>

              <form onSubmit={this.handleOnSubmit}>
                <input id="username" type="text" required id="input-username" label="username" onChange={this.handleOnChange} />
                <input id="password" type="password" required id="input-password" label="password" onChange={this.handleOnChange} />

                <button type="submit">
                  Continue
                </button>
              </form>

            </div>
          </div>
        </div>
      </SignupStyle>
    )
  }
}

/**
 * Export component
 */

export default Signup
