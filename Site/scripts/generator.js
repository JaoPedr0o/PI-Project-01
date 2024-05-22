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

// Adiciona ou remove a mensagem de lista vazia
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

    //Passa o valor do produto para tipo float
    let productPrice = parseFloat(productData.price*product.value)

    //Atribui à variável productName o nome do produto extraido do input
    let productName = product.name

    //Passa a quantidade do produto escolhido para tipo inteiro
    let productCount = parseInt(product.value)
    
    //Verifica se o produto existe na lista
    let produtoExist = productList.find(item => item.nome === productName);
    
    //Verifica se o produto ja está na lista
    if (produtoExist === undefined) {
        if (productCount !== 0) {
            // Se não estiver, adiciona-o com a quantidade especificada em productCount
            productList.push({
                nome: productName,
                preco: productPrice,
                quantidade: productCount,
            })
            
            //Busca no html a tag com id="lista" e cria dentro um "li" indicando: o item adicionado, a quantidade e o valor.
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

    //Função para remover elemento Li
    //Listener registra evendo "click"
    document.addEventListener('click', function(clique) {
        //Se clique for de um eleemento com Id "remove-"
        if (clique.target && clique.target.id.startsWith('remove-')) {
            //Extrai o nome do produto do botão
            const productName = clique.target.id.replace('remove-', '');
            //encontra o numero de index da lista
            const itemIndex = productList.findIndex(item => item.nome === productName);
            if (itemIndex !== -1) {
                // Remove o item da lista de produtos
                productList.splice(itemIndex, 1);
    
                // Remove o elemento <li> correspondente do HTML
                const liParaRemover = document.getElementById(productName);

                if (liParaRemover) {
                    liParaRemover.remove();
                }
    
                // Atualiza a mensagem de lista vazia
                emptyListActive();
                
                // Troca a imagem do carrinho de compras de volta para vazio, caso a lista esteja vazia
                if (productList.length === 0) {
                    let cartIcon = document.getElementById("cart-icon");
                    cartIcon.style.backgroundImage = "url(/Site/assets/icons/carrinho-de-compras-vazio.png)";
                }
            }
        }
    });
    emptyListActive()
}