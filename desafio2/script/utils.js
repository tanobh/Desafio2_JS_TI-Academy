//criar funções

    function resultadoCEP(infoCEP){

        for(let campo in  infoCEP) {

            if(document.querySelector(`#${campo}`)) {                       //se um campo (propriedade) do json tiver o mesmo nome que um id encontrado

                document.querySelector(`#${campo}`).value = infoCEP[campo]; //a informação será inserida naquele campo

            }

        }

    }

    let dadosCEP = async function(cep) {

        let url = `https://viacep.com.br/ws/${cep}/json/`;                  //variável de obtenção da página onde os dados de endereço estão contidos

        try {
            let dadosFetch = await fetch(url);                              //requisição desta página nesta variável

            let dadosJson = await dadosFetch.json();                        //aquisição dos dados no formato .json

            resultadoCEP(dadosJson);                                        //chamado da função com o parâmetro dos dados .json
        } catch(error){                                                     //caso dê erro por conta de CEP inválido, aparecerá um alerta
            alert(error);
        }

    }   

export {resultadoCEP, dadosCEP};                                            //exportação para o documento script.js

