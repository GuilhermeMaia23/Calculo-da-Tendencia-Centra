var numeros = [ 9.2, 9.4 ,6.5, 7.8, 3.5]
var soma = numeros.reduce(function(soma, numeros){
    return soma + numeros 
}, 0) // O zero neste caso é meu IntialValue
console.log("A soma do Array é:", soma)
console.log(soma / numeros.length)

