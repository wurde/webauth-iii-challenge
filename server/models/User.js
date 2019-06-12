'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class User {
  static all() {
    return db_client('users')
  }
}

/**
 * Export model
 */

module.exports = User
