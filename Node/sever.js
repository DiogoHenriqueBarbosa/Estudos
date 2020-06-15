const http = require('http')

const servidor = http.createServer(function (req,res){
    res.end(`
        <h1> Hello! </h1>
    `)
})

servidor.listen(3000)