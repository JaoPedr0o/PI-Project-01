//Lista de produtos
const productList = [  
// Adiciona produtos dinamicamente
];


//Função que processa a adição de produtos à lista
function adicionarCompra(button, productName, productPrice, productCountUnit) {
    let cardProduto = document.querySelector(".card-produto")
    let qtd_unit = parseInt(productCountUnit)
    // let qtd_kg = parseInt(productCountKg)

    //Verifica se o produto existe na lista
    let produtoExist = productList.find(item => item.nome === productName);
    if (produtoExist) {
        // Se o produto já estiver na lista, aumenta a quantidade
        produtoExist.quantidade += qtd_unit;
        produtoExist.preco += productPrice*qtd_unit;
        console.log(productList)
    } else {
        // Se não, adiciona o produto com a quantidade especificada
        productList.push({
            nome: productName,
            preco: productPrice*qtd_unit,
            quantidade: qtd_unit,
        })
        
        //Troca a imagem do carrinho de compras mostrando que algo foi adicionado
        let cartIcon = document.getElementById("cart-icon")
        cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"
        console.log(productList)
    }
}











// /* Como são mais de um elemento com a classe produtokg ou produtounit, o "for" 
//     separa o grupo de classes e é possivel trabalhar com cada elemento de forma individual.
//     No caso o "i" seria o elemento separado.*/
//     // for (let i = 0; i < produtokg.length; i++) {
//     //     if (produtokg[i].value != 0) {
//     //         //Aqui apenas troca a imagem do carrinho de compras mostrando que algo foi adicionado
//     //         let cartIcon = document.getElementById("cart-icon")
//     //         cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"

//     //         //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
//     //         const lista = document.getElementById('lista');
//     //         const li = document.createElement('li');
//     //         const btRemove = document.createElement('button')
//     //         const btAdd = document.createElement('button')
//     //         li.textContent = `${produtokg[i].name}: ${produtokg[i].value} Kg(s): R$23,00`;
            
//     //         porductList.push({ nome: `${produtokg[i].name}`, qtd_kg: `${produtokg[i].value}`})
//     //         console.log(porductList)

//     //         btRemove.textContent = "Remover"
//     //         btAdd.textContent = "Adicionar"
//     //         btRemove.classList.add("btRemove")
//     //         btAdd.classList.add("btAdd")

    //         lista.appendChild(li);
    //         li.appendChild(btRemove)
    //         li.appendChild(btAdd)
    //     }
    // }

    // for (let i = 0; i < produtounit.length; i++) {
    //     if (produtounit[i].value != 0) {
    //         //Aqui apenas troca a imagem do carrinho de compras mostrando que algo foi adicionado
    //         let cartIcon = document.getElementById("cart-icon")
    //         cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"

    //         //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
    //         const lista = document.getElementById('lista');
    //         const li = document.createElement('li');
    //         const btRemove = document.createElement('button')
    //         const btAdd = document.createElement('button')
    //         li.textContent = `${produtounit[i].value} Unidade(s) de ${produtounit[i].name} : R$ `;
    //         btRemove.textContent = "Remover"
    //         btAdd.textContent = "Adicionar"
    //         btRemove.classList.add("btRemove")
    //         btAdd.classList.add("btAdd")

    //         lista.appendChild(li);
    //         li.appendChild(btRemove)
    //         li.appendChild(btAdd)
    //     }
    // }