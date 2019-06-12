'use strict'

/**
 * Dependencies
 */

const express = require('express')
const RootController = require('../controllers/RootController')
const UsersController = require('../controllers/UsersController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/')
  .get(RootController.index)

/**
 * Routes
 *   POST /register
 */

router.route('/register')
  .post(UsersController.register)

/**
 * Routes
 *   POST /login
 */

router.route('/login')
  .post(UsersController.login)

/**
 * Routes
 *   GET /users
 */

router.route('/users')
  .get(UsersController.index)

/**
 * Export router
 */

module.exports = router
