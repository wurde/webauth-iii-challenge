'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route } from 'react-router-dom'
import { Signin, Signup } from '../views/index'

/**
 * Define component
 */

function UsersRouter({ mount }) {
  return (
    <>
      <Route path={`${mount}/signin`} component={Signin} />
      <Route path={`${mount}/signup`} component={Signup} />
    </>
  )
}

/**
 * Define component
 */

export default UsersRouter
