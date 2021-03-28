const express = require('express')
const cors = require('cors')
var mysql = require('mysql')
const app = express()
const port = 3001
const strings = ['a', 'b', 'c']
// const db = require('./db')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/Persons', (req, res) => {
    var y
    connection.query('SELECT * FROM min_hemsida.Persons WHERE FirstName = \'' +  req.query.firstName + '\'', function (err, rows, fields) {
        if (err) {
            console.log('ukar')
            throw err
        }
    
        console.log('ukar2')
    
        console.log('The solution is: ', rows[0])

        y = rows[0]
        res.send( y )
    })
})

// app.get('/z', (req, res) => {
//     var y
//     connection.query("INSERT INTO Persons (FirstName, LastName, City, Comment) VALUES ('Bert','Karlsson','Stockholm','Hejsvejs')", function (err, rows, fields) {
//         if (err) {
//             console.log('ukar')
//             throw err
//         }
    
//         console.log('ukar2')
    
//         console.log('The solution is: ', rows[0])

//         y = rows[0]
//         res.send( y )
//     })
   
// })

app.post('/Persons', (req, res) => {
    console.log("Connected!");
    var sql = "INSERT INTO Persons (LastName, FirstName, City, Comment) VALUES ('Bert', 'Karlsson', 'Stockholm', 'Hejsvejs')";
    connection.query(sql, function (err, result) {
      if (err){
        res.sendStatus(500)
        return
      };
      console.log("1 record inserted");
      res.sendStatus(200);
    });
})

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO Persons (FirstName, LastName, City, Comment) VALUES ('Bert', 'Karlsson', 'Stockholm', 'Hejsvejs')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

app.get('/strings', (req, res) => {
    res.send({ stringsResult: strings })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// function apa(snopp) {
//     return snopp + 1
// }

// apa2 = (snopp) => {
//     return snopp + 1
// }

// apa3 = (snopp) => snopp + 1

// nanting = () => {
//     console.log(apa('Hej'))
// }
// nanting()

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'judas',
    password: 'linnet123',
    database: 'min_hemsida'
})

console.log(connection)
connection.connect(() => console.log('ballar'))

connection.query('SELECT * FROM min_hemsida.Persons;', function (err, rows, fields) {
    if (err) {
        console.log('ukar')
        throw err
    }

    console.log('ukar2')

    console.log('The solution is: ', rows[0])
})

connection.query('SELECT 1', function (error, results, fields) {
    if (error) throw error;
    console.log('VAFAN')
  });

// var connection;

// function handleDisconnect() {
//     connection = mysql.createConnection(connection); // Recreate the connection, since
//                                                     // the old one cannot be reused.

//     connection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }

//   handleDisconnect();

setInterval(function () {
    connection.query('SELECT 1');
}, 1000);



