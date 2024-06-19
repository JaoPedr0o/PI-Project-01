

//Lista de produtos
const productList = [  
// Adiciona produtos dinamicamente
];

//Salva a lista na memória do navegador
function saveList() {
    // Converta o array de objetos em uma string JSON
    let listSaved = JSON.stringify(productList);

    // Salva a string JSON no localStorage
    localStorage.setItem('listaDeProdutos', listSaved);
}

//Lista de Preços de cada produto
const productPriceList = [

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
    {
    "name": "Abobora",
    "price": 3.90,
    },
    {
        "name": "Alface",
        "price": 5.00,
    },
    {
        "name": "Banana",
        "price": 8.95,
    },
    {
        "name": "Beterraba",
        "price": 4.95,
    },
    {
        "name": "Cenoura",
        "price": 4.95,
    },
    {
        "name": "Laranja",
        "price": 5.95,
    },
    {
        "name": "Maça",
        "price": 8.95,
    },  
    {
        "name": "Ameixa",
        "price": 10.50,
    }, 
    {
        "name": "Batata",
        "price": 10.90,
    },
    {
        "name": "Kiwi",
        "price": 15.90,
    },
    {
        "name": "Limão",
        "price": 5.90,
    },
    {
        "name": "Maracujá",
        "price": 15.90,
    },
    {
        "name": "Pêssego",
        "price": 12.90,
    },
    {
        "name": "Melancia",
        "price": 3.95,
    },
    {
        "name": "Muda Alface",
        "price": 0.50,
    },
    {
        "name": "Muda Beterraba",
        "price": 0.70,
    },
    {
        "name": "Muda Cenoura",
        "price": 0.70,
    }, 
    {
        "name": "Muda Couve",
        "price": 0.70,
    },
    {
        "name": "Muda Jilo",
        "price": 0.70,
    },
    {
        "name": "Muda Pimenta",
        "price": 3.00,
    },
    {
        "name": "Muda Pimentão",
        "price": 2.50,
    },
    {
        "name": "Muda Quiabo",
        "price": 0.70,
    },
    {
        "name": "Muda Repolho",
        "price": 0.70,
    },
    {
        "name": "Azeitona",
        "price": 10.00,
    },
    {
        "name": "Cerveja",
        "price": 5.00,
    },
    {
        "name": "Energético",
        "price": 10.00,
    },
    {
        "name": "Farinha",
        "price": 8.00,
    },
    {
        "name": "Feijão",
        "price": 6.00,
    },
    {
        "name": "Ketchup",
        "price": 5.00,
    },
    {
        "name": "Maionese",
        "price": 8.00,
    },
    {
        "name": "Oleo",
        "price": 7.00,
    },
    {
        "name": "Ovos",
        "price": 10.00,
    },
    {
        "name": "Pinga 51",
        "price": 20.00,
    },
    {
        "name": "Bolacha",
        "price": 4.00,
    },
    {
        "name": "Café",
        "price": 40.00,
    },
    {
        "name": "Chocolate",
        "price": 5.00,
    },
    {
        "name": "Extrato de Tomate",
        "price": 7.00,
    },
    {
        "name": "Jamel",
        "price": 10.00,
    },
    {
        "name": "Leite",
        "price": 10.00,
    },
    {
        "name": "Mineiro",
        "price": 8.00,
    },
    {
        "name": "Miojo",
        "price": 2.50,
    },
    {
        "name": "Nutella",
        "price": 15.00,
    },
    {
        "name": "Pringles",
        "price": 10.00,
    },
    {
        "name": "Salgadinho",
        "price": 5.50,
    },
    {
        "name": "Toddy",
        "price": 13.00,
    },
    {
        "name": "Vinho",
        "price": 20.00,
    },
    {
        "name": "Coca-Cola",
        "price": 5.00,
    },

    {
        "name": "Coxa",
        "price": 42.00,
    },
    {
        "name": "Peixe",
        "price": 50.00,
    },
    {
        "name": "Asa Frango",
        "price": 45.00,
    },
    {
        "name": "Costelinha",
        "price": 55.00,
    },
    {
        "name": "Frango",
        "price": 50.00,
    },
    {
        "name": "Peito Frango",
        "price": 50.00,
    },
    {
        "name": "Barrigada",
        "price": 55.00,
    },
    {
        "name": "Lombo",
        "price": 55.00,
    },

    
]

// Adiciona ou remove a mensagem de lista vazia
const lista = document.getElementById('lista');
let emptyList = document.getElementById("empty-list")


function emptyListActive() {
    if (productList.length === 0) {
        emptyList.classList.remove("empty-list-hidden")

        //Troca a imagem do carrinho de compras mostrando está vazio
        let cartIcon = document.getElementById("cart-icon")
        cartIcon.style.backgroundImage = "url(icons/carrinho-de-compras.png)"
    } else {
        emptyList.classList.add("empty-list-hidden")

        //Troca a imagem do carrinho de compras mostrando que algo foi adicionado
        let cartIcon = document.getElementById("cart-icon")
        cartIcon.style.backgroundImage = "url(icons/lista-de-controle.png)"
    }
}
emptyListActive()

//FUNÇÃO DE ADIÇÃO DE PRODUTO À LISTA
function adicionarCompra(product) {
    //Busca o preço do produto escolhido dentro do array de objetos productListprice.  
    let productData = productPriceList.find(produto => produto.name == product.name);

    //Passa o valor do produto para tipo float
    let productPrice = parseFloat((productData.price)*product.value)

    //Atribui à variável productName o nome do produto extraido do input
    let productName = product.name

    //Passa a quantidade do produto escolhido para tipo inteiro
    let productCount = parseInt(product.value)
    
    //Verifica se o produto existe na lista
    let produtoExist = productList.find(item => item.name === productName);
    
    //Verifica se o produto ja está na lista
    if (produtoExist === undefined) {
        if (productCount !== 0) {
            // Se não estiver, adiciona-o com a quantidade especificada em productCount
            productList.push({
                name: productName,
                price: productPrice,
                value: productCount,
            })
            
            //Busca no html a tag com id="lista" e cria dentro um "li" indicando: o item adicionado, a quantidade e o valor.
            const li = document.createElement("li");
            li.id = `${productName}`;
            const btRemove = document.createElement('button')

            li.textContent = `${productName} - ${productCount} Unidade(s) = R$${productPrice.toFixed(2)}`;

            btRemove.textContent = "Remover"
            btRemove.id = `remove-${productName}`

            lista.appendChild(li);
            li.appendChild(btRemove)

            totalUpdate()
        }
    } else {
        // Se o produto já estiver na lista, aumenta a quantidade
        if (productCount !== 0) {
            let li = document.getElementById(`${productName}`)

            const btRemove = document.createElement('button')

            li.textContent = `${productName} - ${produtoExist.value += productCount} Unidade(s) = R$${produtoExist.price += productPrice}`;

            btRemove.textContent = "Remover"
            btRemove.id = `remove-${productName}`
            li.appendChild(btRemove)
            totalUpdate()
        }
    }
    saveList()

    //FUNÇÃO PARA REMOVER PRODUTO DA LISTA
    //Listener registra evendo "click"
    document.addEventListener('click', function(clique) {
        //Se clique for de um elemento com Id "remove-"
        if (clique.target && clique.target.id.startsWith('remove-')) {
            //Extrai o nome do produto do botão

            const productName = clique.target.id.replace('remove-', '');
            //encontra o numero de index da lista

            const itemIndex = productList.findIndex(item => item.name === productName);
            if (itemIndex !== -1) {
                //Apenas de o usuario confirmar a exclusão
                let removePermission = confirm("Deseja realmente remover esse item da lista?")
                if (removePermission === true) {
                    // Remove o item da lista de produtos
                    productList.splice(itemIndex, 1);
        
                    // Remove o elemento <li> correspondente do HTML
                    const liParaRemover = document.getElementById(productName);
                    if (liParaRemover) {
                        liParaRemover.remove();
                    }
                }
                // Atualiza a mensagem de lista vazia
                emptyListActive();
                totalUpdate();
                saveList()
            }
        }
    });
    // Atualiza a mensagem de lista vazia
    emptyListActive()
    saveList()
}

//Funcão que atualiza o total estimado da compra
let h4Total = document.querySelector("#total")
function totalUpdate() {
    let total = productList.map(item => item.price);
    let sum = 0; 
    for (let i = 0; i < total.length; i++) { sum += total[i]; }

    h4Total.textContent = `TOTAL ESTIMADO: R$${sum.toFixed(2)}`
}

//Função de limpar a lista
function clearList() {
    if (productList.length !== 0) {
        //Apenas se o usuário confirmar a exclusão dos produtos
        let clearConfirm = confirm("Deseja realmente excluir todos os produtos da lista?")
        if (clearConfirm === true) {
            //Enquanto o tamanho da lista for maior que 0
        while (productList.length > 0) {
            //Remove todos os elementos do array
            productList.pop()

            // Remove todos os elementos li dentro do #lista
            let listProducts = document.querySelectorAll("#lista li")
            listProducts.forEach(element => {
                element.remove()
            })
            totalUpdate();
            emptyListActive()
            saveList()
            } 
        }
    } else {
        alert("Sua lista está vazia.")
    }
}

//Função que atualiza lista de produtos salva no cache do navegador
window.addEventListener("load", function () {
    // Recupere a string JSON do localStorage
    var listSaved = localStorage.getItem('listaDeProdutos');

    // Converta a string JSON de volta para um array de objetos
    var listLoad = JSON.parse(listSaved);

    // Agora você pode usar o array de objetos normalmente
    console.log("Lista LocalStorage:")
    console.log(listLoad);

    //Chama a função de adicionar compra passando cada item carregado do cache para ser visualizado pelo usuario ao abrir a lista.
    produtcSaved = listLoad.map(function (item) {
        adicionarCompra(item)
    })
    
})

//Função para mandar lista pelo wpp
function enviarWpp(){
    var numTelefone = "+5534999132804";

    let list = document.getElementById("lista")
    var nome = list.innerHTML

    var url = "https://wa.me/" + numTelefone + "?text="
    
    +"-"+nome+"%0a\n"

    window.open(url, '_blank').focus();
}

//Funçaõ que gera PDF
const btnGenerate = document.querySelector("#pdf-generator");

btnGenerate.addEventListener("click", () =>  {
    if (productList.length !== 0) {
        //conteudo do pdf
        const pdfContent = `<h1>Sabores da Terra</h1> <br> <h2 style="color="red">Sua lista de compras</h2> <br> <h4>${lista.innerHTML}</h4> <br> <h1>${h4Total.innerText}</h1>`

        //configuração
        const options = {
            margin: [50, 50, 50, 50],
            fontSize: 30,
            filename: "ListaDeCompras.pdf",
            html2canvas: {scale: 2},
            jsPDF: {unit: "px", format: "a4", orientation: "portrait"}
        }

        //Gerar e baixar pdf
        html2pdf().set(options).from(pdfContent).save()
    } else {
        alert("Sua lista está vazia.")
    }
})