//chamar funções e aplicar as informações nos campos
import { CriarLista, AdicionaSacola, Calcular } from "./utils.js";

window.onload = function() {
    CriarLista();
    AdicionaSacola("produtos", "cestaDoCliente");
}

Calcular();


