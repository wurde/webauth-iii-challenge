'use strict'

/**
 * Dependencies
 */

const jsonwebtoken = require('jsonwebtoken')
const db_client = require('../db/client')
const secrets = require('../config/secrets')

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

  static async generate_token(user) {
    const payload = {
      subject: user.id,
      username: user.username
    }

    const options = {
      expiresIn: '1d',
    }

    return jsonwebtoken.sign(payload, secrets.jsonwebtoken_secret, options)
  }
}

/**
 * Export model
 */

module.exports = User
