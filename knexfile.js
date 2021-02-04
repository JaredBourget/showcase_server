'use strict'
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user:     'jared',
      password: 'postgres'
    },
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }
  }
}

// staging: {
//   client: 'postgresql',
//   connection: {
//     database: 'postgres',
//     user:     'jared',
//     password: 'postgres'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// },
// production: {
//   client: 'postgresql',
//   connection: {
//     database: 'postgres',
//     user:     'jared',
//     password: 'postgres'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// }