module.exports = (app) => {
    app.get('/',function(req,resp){
        const dia = new Date()
        
        resp.send(`
        
        <h1>Diogo ${dia.getFullYear()}</h1>
        `)    
    })
    
    app.get('/Livros', function(req,resp){
        resp.marko(
            require('../views/livros/list/list.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Diogo'
                    },
                    {
                        id: 2,
                        titulo: 'Isabella'
                    }
                ]
            }
        ) 
    })

    
}

