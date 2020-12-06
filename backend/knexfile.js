// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:"localhost",
      user:"root",
      password:"Root1234",
      database:"to_do"
    }
  },

  migrations:{
    directory: `${__dirname}\src\database\migrations`
  },
  
  seeds:{
    directory: `${__dirname}\src\database\seeds`
  }


};
