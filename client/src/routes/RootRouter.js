'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * Define component
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/users" />} />
    </>
  )
}

/**
 * Export component
 */

export default RootRouter
