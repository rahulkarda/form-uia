const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/autism'),(request,response)=>{
    response.sendFile(__dirname + '/autism.html')
}




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})