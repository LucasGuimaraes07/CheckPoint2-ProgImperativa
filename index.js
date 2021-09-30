// CHECKPOINT 2 - PROGRAMAÇÃO INTERATIVA

/* 1.	Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status */

// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

let produtos = [

    {
      nome: 'Play 4',
      valor: 6100,
      qualidade: 8,
      status: true
    },

    {
      nome: 'Monitor Game',
      valor: 1200,
      qualidade: 7,
      status: true
    },

    {
      nome: 'Notebook Positivo',
      valor: 2800,
      qualidade: 6,
      status: true
    },

    {
      nome: 'Smart Tv LED',
      valor: 1499,
      qualidade: 7,
      status: false
    },

    {
      nome: 'SoundBar',
      valor: 1000,
      qualidade: 7,
      status: true
    },

    {
      nome: 'Smartphone',
      valor: 1500,
      qualidade: 8,
      status: true 
    }
  ];

/* 2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 
Valor entre 482 e 1600;
Qualidade superior a 6;
Status como disponível.

O resultado do filtro deve ser armazenado na variável carrinho.*/

let carrinho = produtos.filter((produto) => {
    return produto.valor >= 480 &&
           produto.valor <= 1600 && 
           produto.qualidade > 6 &&
           produto.status === true
            
}
);

// 3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.


let itensDoCarrinho = carrinho.map((item) => {

    return (`\n${item.nome} R$ ${item.valor}`)

});

let valorTotalCompra = carrinho.reduce((acumador, preco) =>{

    return acumador + preco.valor;

}, 0);

console.log(`Os produtos do carrinho são ${itensDoCarrinho}. 
O valor total da compra é de R$ ${valorTotalCompra}.`);






