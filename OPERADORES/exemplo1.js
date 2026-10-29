const precoProduto = 100
const desconto = 15
const frete = 20

const precoComDesconto = precoProduto - desconto
const precoFinal = precoComDesconto + frete
const parcelas = precoFinal / 2

console.log("Preço final faturado: R$ " + precoFinal)
console.log("Valor de cada parcela: R$ " + parcelas)
