//Lista de produtos
const productList = [  
// Adiciona produtos dinamicamente
];


//Lista de Preços de cada produto
const productPriceList = [
    {
    "name": "Mamão",
    "price": 3.5,
    },
    {
    "name": "Banana Prata",
    "price": 4.5,
    },
    {
    "name": "Pitahaya",
    "price": 5.00,
    },
    {
    "name": "Coco",
    "price": 6.00,
    },
    {
    "name": "Figo",
    "price": 2.00,
    },
    {
    "name": "Pera",
    "price": 1.75,
    },
    {
    "name": "Morango",
    "price": 8.00,
    },
    {
    "name": "Limão Siciliano",
    "price": 1.50,
    },
    {
    "name": "Manga Espada",
    "price": 4.80,
    },
    {
    "name": "Abacate",
    "price": 3.90,
    },
]

const lista = document.getElementById('lista');
let emptyList = document.getElementById("empty-list")

function emptyListActive() {
    if (productList.length === 0) {
        emptyList.classList.remove("empty-list-hidden")
    } else {
        emptyList.classList.add("empty-list-hidden")
    }
}
emptyListActive()

//Função que processa a adição de produtos à lista | Ela traz o conteudo do imput no html
function adicionarCompra(product) {
    //Busca o preço do produto escolhido dentro do array de objetos productListprice.  
    let productData = productPriceList.find(produto => produto.name == product.name);
    let productPrice = parseFloat(productData.price*product.value)
    let productName = (product.name)
    let productCount = parseInt(product.value)
    
    //Verifica se o produto existe na lista
    let produtoExist = productList.find(item => item.nome === productName);
    
    if (produtoExist === undefined) {
        if (productCount !== 0) {
            // Se não, adiciona o produto com a quantidade especificada
            productList.push({
                nome: productName,
                preco: productPrice,
                quantidade: productCount,
            })
            
            //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
            const li = document.createElement("li");
            li.id = `${productName}`;
            const btRemove = document.createElement('button')

            li.textContent = `${productName} - ${productCount} Unidade(s) = R$${productPrice}`;

            btRemove.textContent = "Remover"
            btRemove.id = `remove-${productName}`

            lista.appendChild(li);
            li.appendChild(btRemove)

            //Troca a imagem do carrinho de compras mostrando que algo foi adicionado
            let cartIcon = document.getElementById("cart-icon")
            cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"
            console.log(productList)
        }
        emptyListActive()
    } else {
        // Se o produto já estiver na lista, aumenta a quantidade
        if (productCount !== 0) {
            let li = document.getElementById(`${productName}`)

            const btRemove = document.createElement('button')

            li.textContent = `${productName} - ${produtoExist.quantidade += productCount} Unidade(s) = R$${produtoExist.preco += productPrice}`;

            btRemove.textContent = "Remover"
            btRemove.id = `remove-${productName}`
            li.appendChild(btRemove)
        }
    }
    emptyListActive()
}