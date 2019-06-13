/**
 * Dependencies
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { SigninStyle } from './styles/index'
import axios from 'axios'

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

    console.log('handleOnSubmit', this.state)
    axios.post('http://localhost:8080/login', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
        this.props.history.push('/users')
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleOnChange = (event) => {
    event.preventDefault()
    console.log('event.target.name', event.target.name)
    console.log('event.target.value', event.target.value)
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
                  <input id="username" type="text" required id="input-username" name="username" value={this.state.username} onChange={this.handleOnChange} className="form-control" autoFocus={true} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" required id="input-password" name="password" value={this.state.password} onChange={this.handleOnChange} className="form-control" />
                </div>

                <button type="submit" className="btn btn-block btn-primary">
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
