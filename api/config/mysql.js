const mysql = require('mysql2'); // mysql

module.exports = {
   connect: function () {
      return mysql.createConnection({
         host: '188.226.185.108',
         user: 'root',
         password: 'cra57rze',
         database: 'hifi'
      })
   }
}