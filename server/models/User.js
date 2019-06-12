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

  static find(filter) {
    return db_client('users').where(filter).first()
  }

  static async create(user) {
    const [id] = await db_client('users').insert(user)
    return db_client('users').where({ id }).first()
  }
}

/**
 * Export model
 */

module.exports = User
