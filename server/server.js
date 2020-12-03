const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const strings = ['a', 'b', 'c']

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/x', (req, res) => {
    res.send({asd:'test'})
})

app.get('/strings', (req, res) => {
    res.send({stringsResult:strings})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
function apa(snopp) {
    return snopp + 1
}

apa2 = (snopp) => {
    return snopp + 1
}

apa3 = (snopp) => snopp + 1

nanting = () => {
    console.log(apa('Hej'))
}
nanting()




