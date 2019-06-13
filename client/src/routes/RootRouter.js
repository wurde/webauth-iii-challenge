'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Signin, Signup, UsersList } from '../views/index'

/**
 * Define component
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/users" />} />
      <Route path="/users/signin" component={Signin} />
      <Route path="/users/signup" component={Signup} />
      <Route exact path="/users" component={UsersList} />
    </>
  )
}

/**
 * Export component
 */

export default RootRouter
