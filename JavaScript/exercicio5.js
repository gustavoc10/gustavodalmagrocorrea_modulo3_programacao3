/** 5 crie um programa que baseado no retorno
  */
 const DOMINGO        = 0;
 const SEGUNDA_FEIRA  = 1;
 const TERCA_FEIRA    = 2;
 const QUARTA_FEIRA   = 3;
 const QUINTRA_FEIRA  = 4;
 const SEXTA_FERIA    = 5;
 const SABADO         = 6;
 //Date(). GetDay() Retorna um numero inteiro do tipo Number,
 //onde 0 = domingo e o 6 = sabado
 let diaDaSemana = new Date().getDay();
  switch(diaDaSemana){
    case DOMINGO:
        console.log("hoje é domingo"):
        break;
    case SEGUNDA_FEIRA:
        console.log("hoje é segunda feira"):
        break;
    case TERCA_FEIRA:
        console.log("hoje é terça feira"):
        break;
    case QUARTA_FEIRA:
        console.log("hoje é quarta feira"):
        break;
    case QUINTRA_FEIRA:
        console.log("hoje é quinta feira"):
        break;
    case SEXTA_FERIA:
        console.log("hoje é sexta feira"):
        break;
    case SABADO:
        console.log("hoje é sabado feira"):
        break;

}