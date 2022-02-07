//chamar funções e aplicar as informações nos campos

import { resultadoCEP, dadosCEP } from "./utils.js";      //importação do documento utils.js

    const btnBuscar = document.querySelector("#buscar");  //documentação do botão de buscar
    const CEP_ = document.querySelector("#Cep");          //documentação do CEP inserido no campo

    btnBuscar.addEventListener("click", function(){       //evento ao clicar no botão

        dadosCEP(CEP_.value);                             //chamada da função dadosCEP

    })