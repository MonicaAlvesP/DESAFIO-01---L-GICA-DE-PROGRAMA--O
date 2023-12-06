console.log("Ano novo está chegando!!")

// Informações sobre a cantora Mariah Carey
let _nomeCantora = "Mariah Carey"
let _idadeCantora = 54

// Váriavel com o ano atual
let _anoAtual = 2023

// Calculando ano de nascimento da cantora
let _anoNascimento = _anoAtual - _idadeCantora


console.log(`Data de nascimento da ${_nomeCantora}: ${_anoNascimento}`)

// Declarando váriavel Quarta-Feira com valor booleano
let _quartaFeira = true

// Definindo tipo e valor da váriavel
console.log(`Valor da váriavel: ${_quartaFeira}`)
console.log(`Tipo de váriavel: ${typeof _quartaFeira}`)


// Declarando váriavel idade
let _idade = 28

// Condição para verificar se é maior de 18
if (_idade >= 18) {
    console.log(`Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de ${_nomeCantora}.`)
} else {
    console.log(`Sinto muito, mas assistirá na Tv Globo`)
}

// Declarando váriavel mês
let _mes = "Março"

// Condição para verificar o mês de aniversário, se é no mês de Agosto, Dezembro ou Junho
if (_mes === "Agosto" || _mes === "Dezembro" || _mes === "Junho") {
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi: ${_mes}.`)
} else {
    console.log(`Algo de errado não está certo, o mês escolhido foi: ${_mes}`)
}