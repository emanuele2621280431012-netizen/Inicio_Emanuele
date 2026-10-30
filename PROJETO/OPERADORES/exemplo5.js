const produto = "Notbook"
const preco = 3500.00

//concatenando
resumo = "O preço do" + produto + " é R$ " + preco
console.log(resumo)

//Interpolação de Texto (String) com crase
resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)} `

console.log(resumo)