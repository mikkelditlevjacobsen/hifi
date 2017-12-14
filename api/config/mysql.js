const mysql = require('mysql2'); // mysql

module.exports = {
   connect: function () {
      return mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'cra57rze',
         database: 'hifi',
         port: 3306
      })
   }
}