//Lista de produtos
const productList = [  
// Adiciona produtos dinamicamente
];

//Função que processa a adição de produtos à lista
function adicionarCompra(productName, productPrice, productCountUnit, productCountKg) {
    let cardProduto = document.querySelector(".card-produto")
    let qtd_unit = parseInt(productCountUnit)
    let qtd_kg = parseFloat(productCountKg)

    //Verifica se o produto existe na lista
    let produtoExist = productList.find(item => item.nome === productName);
    
    if (produtoExist) {
        // Se o produto já estiver na lista, aumenta a quantidade
        if (productCountKg !== 0 && productCountUnit > 0) { //Se for em unidade
            produtoExist.quantidade += qtd_unit;
            produtoExist.preco += productPrice*qtd_unit;
            console.log(productList)
        } else if (productCountUnit !== 0 && productCountKg > 0) { //Se for em quilogramas
            produtoExist.quantidade += qtd_kg;
            produtoExist.preco += productPrice*qtd_kg;
            console.log(productList)
        }  
    } else {
        // Se não, adiciona o produto com a quantidade especificada
        if (productCountKg !== 0 && productCountUnit > 0) { //Se for em unidade
            productList.push({
                nome: productName,
                preco: productPrice*qtd_unit,
                quantidade: qtd_unit,
            })
            atualizaLista(productName, qtd_unit, productCountUnit*productPrice)
        } else if (productCountUnit !== 0 && productCountKg > 0) { //Se for em quilogramas
            productList.push({
                nome: productName,
                preco: productPrice*qtd_kg,
                quantidade: qtd_kg,
            })
            atualizaLista(productName, qtd_kg, productCountKg*productPrice)
        } 
        //Troca a imagem do carrinho de compras mostrando que algo foi adicionado
        let cartIcon = document.getElementById("cart-icon")
        cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"
        console.log(productList)
    }
}

function atualizaLista(productName, productCount ,productPrice) {
    //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
    const lista = document.getElementById('lista');
    const li = document.createElement('li');
    const btRemove = document.createElement('button')
    const btAdd = document.createElement('button')

    li.textContent = `${productName}: ${productCount}: R$${productPrice}`;

    btRemove.textContent = "Remover"
    btAdd.textContent = "Adicionar"
    btRemove.classList.add("btRemove")
    btAdd.classList.add("btAdd")

    lista.appendChild(li);
    li.appendChild(btRemove)
    li.appendChild(btAdd)
}