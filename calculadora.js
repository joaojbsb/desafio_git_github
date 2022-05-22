import { soma } from "./somar.js";
import { subtracao } from "./subtrair.js";
import { multiplicacao } from "./multiplicar.js";
import { divisao } from "./dividir.js";

console.log(soma(4,5));
console.log(subtracao(10,5));
console.log(multiplicacao(4,5));
console.log("multiplicação com 0 como argumento: " + multiplicacao(8,0));
console.log(divisao(10,5));
console.log("Divisao com 0 como argumento: " + divisao(0,10))