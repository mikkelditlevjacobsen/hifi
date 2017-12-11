const mysql = require('mysql2'); // mysql

module.exports = {
   connect: function () {
      return mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'root',
         database: 'hifi',
         port: 8889
      })
   }
}