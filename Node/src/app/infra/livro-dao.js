class ListaLivro{
    constructor(db){
        this._db = db
    }

    lista(callBack){
        this._db.all(
            'SELECT * FROM livros',  
            (error, resultados) => (
                callBack(error,resultados)
            )
        )
    }
}

module.exports = ListaLivro