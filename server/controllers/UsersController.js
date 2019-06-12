'use strict'

/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static register(req, res) {
    res.sendStatus(200)
  }

  static login(req, res) {
    res.sendStatus(200)
  }

  static index(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = UsersController
