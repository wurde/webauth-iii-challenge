'use strict'

/**
 * Dependencies
 */

const jsonwebtoken = require('jsonwebtoken')
const secrets = require('../config/secrets')

/**
 * Define middleware
 */

async function auth_user(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jsonwebtoken.verify(token, secrets.jsonwebtoken_secret, (err, decodeToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Credentials' })
      } else {
        req.user = { username: decodeToken.username }
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'No token provided' })
  }
}

/**
 * Export middleware
 */

module.exports = auth_user
