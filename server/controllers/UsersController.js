'use strict'

/**
 * Dependencies
 */

const bcrypt = require('bcryptjs')
const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static async register(req, res) {
    try {
      const password_hash = bcrypt.hashSync(req.body.password, 15)

      let user = await User.create({
        username: req.body.username,
        password_hash: password_hash
      })

      res.status(201).json(user)
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }

  static async login(req, res) {
    res.sendStatus(200)
  }

  static async index(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = UsersController
