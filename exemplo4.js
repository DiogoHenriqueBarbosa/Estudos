function calculadora(x, y) {
    return {
        x: x,
        y: y,

        mutiplicar: function () {
            return this.x * this.y
        },
        dividir: function () {
            return this.x / this.y
        },
        somar: function () {
            return this.x + this.y
        }

    }
}
valores = calculadora(20,30)
console.log(valores.somar())
console.log(valores.dividir())
console.log(valores.mutiplicar())
