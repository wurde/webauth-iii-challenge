/**
 * Dependencies
 */

import React, { Component } from 'react'
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
                <input id="username" type="text" required id="input-username" label="username" onChange={this.handleOnChange} />
                <input id="password" type="password" required id="input-password" label="password" onChange={this.handleOnChange} />

                <button type="submit">
                  Continue
                </button>
              </form>

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
