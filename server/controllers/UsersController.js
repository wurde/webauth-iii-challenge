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
    try {
      let user = await User.find({ username: req.body.username })

      if (user && bcrypt.compareSync(req.body.password, user.password_hash)) {
        const token = await User.generate_token(user)

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }

  static async index(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = UsersController
