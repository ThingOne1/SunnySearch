function criarCard(nome, preco, link, arrayCaracteristicas) {
    const card = document.createElement("li");
    card.classList.add(
        "card",
        nome.toLowerCase() === "empresa x" && "color--primary",
        nome.toLowerCase() === "empresa y" && "color--primary",
        nome.toLowerCase() === "empresa z" && "color--primary"
    );

    const header = document.createElement("header");
    const headerTitle = document.createElement("h4");
    headerTitle.textContent = nome;
    header.append(headerTitle);

    const cardBody = document.createElement("section");
    cardBody.classList.add("body");

    const divPrice = document.createElement("div");
    divPrice.classList.add("price");
    const priceText = document.createElement("h5");
    priceText.textContent = preco;
    divPrice.append(priceText);

    const caracList = document.createElement("ul");
    caracList.classList.add("caracteristics");

    arrayCaracteristicas.forEach((c) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = c;
        li.append(p);
        caracList.append(li);
    });

    const footer = document.createElement("footer");
    const shopButton = document.createElement("a")
    shopButton.classList.add("comprar");
    shopButton.href = link
    shopButton.target = "_blank"
    shopButton.textContent = "Comprar";
    footer.append(shopButton);

    cardBody.append(divPrice, caracList);
    card.append(header, cardBody, footer);

    return card;
}

function myFunction() {
    const x = document.getElementById('preco');
    var Dinheiro = x.value;
    var quantovaiser1 = 31.01;
    var quantovaiser2 = 43.41;
    var eco = 11.28;
    var area = 0.048;
    var totarea = Dinheiro * area;
    var toteco = Dinheiro * eco;
    var money1 = Dinheiro * quantovaiser1;
    var money2 = Dinheiro * quantovaiser2;
    var objetoreturn = {
        valorminimo: money1,
        valormax: money2,
        economia: toteco,
        area: totarea,
        nome: "Empresa X",
        link: "https://www.intelbras.com/pt-br/energia-solar/on-grid"

    }
    var objetoreturn2 = {
        valorminimo: money1,
        valormax: money2,
        economia: toteco,
        area: totarea,
        nome: "Empresa Y",
        link: "https://www.intelbras.com/pt-br/energia-solar/on-grid"

    }
    var objetoreturn3 = {
        valorminimo: money1,
        valormax: money2,
        economia: toteco,
        area: totarea,
        nome: "Empresa Z",
        link: "https://www.intelbras.com/pt-br/energia-solar/on-grid"

    }
    var productprice = [objetoreturn, objetoreturn2, objetoreturn3]
    const lista = document.querySelector("ul.cards");
    lista.innerHTML = ""
    productprice.forEach(dado => {
        const card = criarCard(dado.nome, "Entre " + dado.valorminimo.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }) + " e " + dado.valormax.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }), dado.link, ["Economia Estimada de: " + dado.economia.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }), "Tempo aproximado de retorno: 2 e 3 anos ", "Area minima necessaria: " + dado.area + "/m²"])

        lista.appendChild(card)
    })
}