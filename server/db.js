var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'judas',
    password: 'linnet123',
    database: 'min_hemsida'
})

connection.connect()

// var db = {

//     myQuery() {
//         connection.query('SELECT * FROM Comments;', function (err, rows, fields) {
//             if (err) throw err
        
//             console.log('The solution is: ', rows[0])
//         })
//     }
// } 
// module.exports {
//     db
// }

exports.db = {

    myQuery:() => {
        connection.query('SELECT * FROM Comments;', function (err, rows, fields) {
            if (err) throw err
        
            console.log('The solution is: ', rows[0])
        })
    }
} 