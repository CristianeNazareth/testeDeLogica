



sp = 67.836,43
rj = 36.678,66
mg = 29.229,88
es = 27.165,48
outros = 19.849,53

let soma = parseFloat(sp + rj + mg + es + outros)
console.log(soma)

saoPaulo = (sp/soma)*100
rioJaneiro = (rj/soma)*100
minasGerais = (mg/soma)*100
espiritoSanto =(es/soma)*100
outrosEstados = (outros/soma)*100


console.log(`Percentual de SP é ${saoPaulo}`)
console.log(`Percentual de RJ é ${rioJaneiro}`)
console.log(`Percentual de MG é ${minasGerais}`)
console.log(`Percentual de ES é ${espiritoSanto}`)
console.log(`Percentual de Outros é ${outrosEstados}`)
