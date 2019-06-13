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

      const token = await User.generate_token(user)

      res.status(201).json({user, token})
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }

  static async login(req, res) {
    try {
      let user = await User.find({ username: req.body.username })
      console.log('login user', user)

      if (user && bcrypt.compareSync(req.body.password, user.password_hash)) {
        const token = await User.generate_token(user)
        console.log('login token', token)

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
    try {
      let users

      if (req.user.department) {
        users = await User.all(req.user.department)
      } else {
        users = await User.all()
      }

      res.status(200).json(users)
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = UsersController
