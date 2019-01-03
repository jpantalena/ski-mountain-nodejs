module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mountain_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL + '?ssl=true'
  }
};
