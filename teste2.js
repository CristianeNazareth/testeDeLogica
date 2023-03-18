
let soma = 0
let primeiro = 0
let segundo = 1
let numero = 9

for (i = 0; i < numero; i++) {
    soma = primeiro + segundo
    

    primeiro = segundo
    segundo = soma
    console.log(soma)
}
