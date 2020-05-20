var valores = [4, 2, 6, 8, 9, 8]
function mediana (valores) {

    valores.sort( function(a,b) {return a - b;} );

    var half = Math.floor(valores.length/2);

    if(valores.length % 2)
        return valores[half];
    else
        return (valores[half-1] + valores[half]) / 2.0;
}

console.log(valores)
console.log(mediana(valores));