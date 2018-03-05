const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}
const produtos = {}

function SalvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProtuto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto

}
module.exports = {SalvarProduto, getProtuto, getProdutos, excluirProduto}