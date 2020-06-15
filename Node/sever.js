const http = require('http')

const servidor = http.createServer(function (req,res){
    res.end(`
     html
      `)
})

servidor.listen(3000)