/**Crie um programa que verifique se um numero esta entre 50 e 10 e imprima
 *  na tela uma mensagem informando se tela numero esta na faixa de valores solicitada
 *  na questao
 *   
 * */
let numeroAserValidado = 35;

if (numeroAserValidado >= 50 && numeroAserValidado <= 100){
console.log("O numero ", numeroAserValidado, "esta entre 50 e 100.")

}else{
    console.log("O numero ", numeroAserValidado, "não esta entre 50 e 100.")
 }

 /***Operador ternario*/
 console.log("Usando o operador terminario do JavaScript");
numeroAserValidado >= 50 && numeroAserValidado <= 100
 ? console.log("O numero ", numeroAserValidado, "esta entre 50 e 100.")
 : console.log("O numero ", numeroAserValidado, "não esta entre 50 e 100.");
