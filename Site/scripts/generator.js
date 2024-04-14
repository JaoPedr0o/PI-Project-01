// Carregando os dados do arquivo JSON
// ESSES DADOS NÃO SERÃO CRIADOS DESSA FORMA E SIM EXTRAIDOS DO JSON
        const productList = [
            
            // Adiciona itens dinamicamente
        ];

function adicionarCompra(productName, productValue) {
    let produtokg = document.getElementsByClassName("produtokg") //Pega do HTML o input com o valor em quilogramas através da classe
    let produtounit = document.getElementsByClassName("produtounit") //Pega do HTML o input com o valor por unidade através da classe
    
    for (let index = 0; index < produtounit.length; index++) {
        if (produtounit[index].value != 0) {
            //Aqui apenas troca a imagem do carrinho de compras mostrando que algo foi adicionado
            let cartIcon = document.getElementById("cart-icon")
            cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"

            //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
            const lista = document.getElementById('lista');
            const li = document.createElement('li');
            const btRemove = document.createElement('button')
            const btAdd = document.createElement('button')

            if (productList.find(item => item.nome === `${productName}`) !== undefined) {
                console.log("É DIFERENTE!")
                productList.find(item => item.valor = item.valor+productValue) 
                console.log(productList)
            } else {
                productList.push({ nome: `${productName}`, qtd_unit: parseFloat(produtounit[index].value), valor: parseFloat(produtounit[index].value)*productValue})
                console.log(productList)

                li.textContent = `${productName} - ${parseFloat(produtounit[index].value)*productValue}`;

                btRemove.textContent = "Remover"
                btAdd.textContent = "Adicionar"
                btRemove.classList.add("btRemove")
                btAdd.classList.add("btAdd")

                lista.appendChild(li);
                li.appendChild(btRemove)
                li.appendChild(btAdd)
            }
            
        }    
    }
}











/* Como são mais de um elemento com a classe produtokg ou produtounit, o "for" 
    separa o grupo de classes e é possivel trabalhar com cada elemento de forma individual.
    No caso o "i" seria o elemento separado.*/
    // for (let i = 0; i < produtokg.length; i++) {
    //     if (produtokg[i].value != 0) {
    //         //Aqui apenas troca a imagem do carrinho de compras mostrando que algo foi adicionado
    //         let cartIcon = document.getElementById("cart-icon")
    //         cartIcon.style.backgroundImage = "url(/Site/assets/icons/lista-de-controle.png)"

    //         //Aqui ele busca no html a tag com id="lista" e cria dentro um "li" indicando o item adicionado, quantidade e valor.
    //         const lista = document.getElementById('lista');
    //         const li = document.createElement('li');
    //         const btRemove = document.createElement('button')
    //         const btAdd = document.createElement('button')
    //         li.textContent = `${produtokg[i].name}: ${produtokg[i].value} Kg(s): R$23,00`;
            
    //         porductList.push({ nome: `${produtokg[i].name}`, qtd_kg: `${produtokg[i].value}`})
    //         console.log(porductList)

    //         btRemove.textContent = "Remover"
    //         btAdd.textContent = "Adicionar"
    //         btRemove.classList.add("btRemove")
    //         btAdd.classList.add("btAdd")

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