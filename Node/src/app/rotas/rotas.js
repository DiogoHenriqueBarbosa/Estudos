const ListaLivro = require('../infra/livro-dao')
const db = require('../../config/database')

module.exports = (app) => {
    app.get('/', function (req, resp) {
        const dia = new Date()

        resp.send(`
        
        <h1>Diogo ${dia.getFullYear()}</h1>
        `)
    })

    app.get('/Livros', function (req, resp) {
        const livroDoa = new ListaLivro(db)

        livroDoa.lista(function (error, resultados) {
            resp.marko(
                require('../views/livros/list/list.marko'),
                {
                    livros: resultados

                }

            )
        })
     }
    )
}