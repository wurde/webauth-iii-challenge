'use strict'

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Bob', department: 'Information Systems', password_hash: '$2a$10$VSfcvX4hZq0zJ5ImDbghr.mzbdg97yryH.Ejr9kXRj/na17uzyEna'},
        {id: 2, username: 'Alic', department: 'Information Systems', password_hash: '$2a$10$XFnAq2.fdjvjSuc2XYfyqeG9rAfaR..sFd8gHST50UCsUcqT1BmCq'},
        {id: 3, username: 'Erick', department: 'Fixed Asset Accounting', password_hash: '$2a$10$svho5giZkXDL31nC55Dzl.GRtLQoyezXNKoYlqBBfpjOHAIC5usXe'},
      ])
    })
}
