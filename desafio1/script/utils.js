//criar funções

let totalSacola = 0;

function CriarLista() {
    let frutas = [
        {
            nome: "banana",
            preco: 2,
        },

        {
            nome: "melancia",
            preco: 10,
        },

        {
            nome: "uva",
            preco: 3,
        },

        {
            nome: "laranja",
            preco: 1.50,
        },

        {
            nome: "pera",
            preco: 3.50,
        },
    ];

    const lista = document.querySelector("#produtos");

    (()=>{

        let totalzinho = 0;


        for(let fru of frutas)
        {
            const filhoLi = document.createElement("li");

            for(let listaF in fru)
            {  
                if( listaF == "preco")
                {
                    lista.appendChild(filhoLi).setAttribute("data-preço", fru[listaF]);
                    lista.appendChild(filhoLi).setAttribute("class", "disponível");
                }
                else
                {
                    lista.appendChild(filhoLi).textContent = `${fru[listaF]}`;
                }
            }
        }

    })(frutas)

}

    function AdicionaSacola(id)
    {
        const lista = document.querySelectorAll(`#${id} > li`);
        const newLista = document.querySelector("#cestaDoCliente");
        

        for(let produto of lista)
        {
            
            produto.addEventListener("click", function(){ 
            if(produto.getAttribute("class") == "disponível")
            { 
            const fruta = document.createElement("li");
            newLista.appendChild(fruta).textContent = produto.textContent;
            newLista.appendChild(fruta).setAttribute("data-preço", produto.getAttribute("data-preço"));
            totalSacola += Number(produto.getAttribute("data-preço"));
            console.log(totalSacola);
            produto.setAttribute("class", "indisponível");
            Calcular();
            }
            else
            {
                alert(`Este item ${produto.textContent} já está em sua sacola!`);
            }
                        
            });
            
        }
    }
    
    function Calcular()
    {
        let total = document.querySelector("#mostraTotalCompra");
        total.value = totalSacola.toLocaleString("pt-BR", {style: "currency", currency:"BRL"});
        
    }




export {CriarLista, AdicionaSacola, Calcular};