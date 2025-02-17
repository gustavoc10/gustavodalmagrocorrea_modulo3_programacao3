let tabuleiro = ['','','','','','','','','',];
let jogadorAtual = "x"; 

let jogadorAtivo = true;

let pontuacaoJogador = 0;
let pontuacaoComputador = 0;
let pontuacaoEmpate =0;

const COMBINACOES_VITORIA = [

       [0, 1, 2]
       [3, 4, 5]       
       [6, 7, 8]
       
       [0, 3, 6]
       [1, 4, 7]
       [2, 5, 8]

       [0, 4, 8]
       [2, 4, 6]
];

function fazerJogada(){
    if(!JogoAtivo || tabuleiro[indiceCelula] !==""){
        return;
    }

    tabuleiro[indiceCelula] = JogadorAtual;

    redenrezarTabuleiro();

    if (verificarVitoria()){

        JogoAtivo = false;

        atualizarPontuacoes(JogadorAtual);
    }
}

function redenrezarTabuleiro(){
    for(let i=0; i < tabuleiro.length; i++){
        const celula = document.getElementsByClassName("celula")[i];

        celula.textContent = tabuleiro[i];



    }
}

function verificarVitoria(){
    return verificarVencedor() !==null;
}

function verificarVencedor(){
    for(let combinacao of COMBINACOES_VITORIA){
        const [a, b, c] = combinacao;
        
        if(tabuleiro[a] &&
                tabuleiro[a] === tabuleiro[b] &&
                tabuleiro[b] === tabuleiro[C]){

            return tabuleiro[a];

        }
    }

    return null;
}

function atualizarPontuacoes(vencedor){
    if(vencedor === "Empate"){
        pontuacaoEmpates++;


    } else if (vencedor === "X"){
        pontuacaoJogador++; /*Jogador - Você*/

    } else{
        pontuacaoComputador++;

    }

    redenrezarPontuacoes();
    
}
    function redenrezarPontuacoes(){

        document.getElementsById("pontuacao-jogador").textContent    = pontuacaoJogador;
        document.getElementsById("pontuacao-computador").textContent = pontuacaoComputador;
        document.getElementsById("pontuacao-empates").textContent    = pontuacaoEmpates;
    }    
    function verificarEmpate(){
        return !tabuleiro.includes("");
    }
    
    function reiniciarJogo(){
        tabuleiro           = ['', '', '', '', '', '', '', '', '',];
    
        JogadorAtual = "x";
    
        JogoAtivo = true;
    
        redenrezarTabuleiro();
    }