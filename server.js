const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// app.get('/api/:name',(request,response)=>{
//     const rapperName = request.params.name.toLowerCase()

//     if( rappers[rapperName] ){
//         response.json(rappers[rapperName])
//     }else{
//         response.json(rappers['unknown'])
//     }
    
// })

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})