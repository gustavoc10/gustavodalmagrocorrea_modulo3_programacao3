let tabuleiro    = ['','','','','','','','','',];

let jogadorAtual = "X"; /* ou o 0 (ZERO)*/

let jogoAtivo    = true;

let pontuacaoJogador    = 0;
let pontuacaoComputador = 0;
let pontuacaoEmpate     = 0;

const COMBINACOES_VITORIA = [

    /*LINHAS*/
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]

   /*COLUNAS*/
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]

  /*VERTICAIS*/
    [0, 4, 8]
    [2, 4, 6]
];

function fazerJogada(indiceCelula){

    if(!jogoAtivo || tabuleiro[indiceCelula] !== ""){
        return;
    }

    tabuleiro[indiceCelula] = jogadorAtual;

    renderizarTabuleiro();

    if(verificarVitoria()){

        jogoAtivo = false;

        atualizarPontuacoes(jogadorAtual);

        setTimeout(()=>{
            alert(`${jogadorAtual} venceu!! `)
        }, 100);

        return

    }
    if (verificarEmpate()){
        jogoAtivo = false;
        atualizarPontuacoes("empate");
        setTimeout(()=>{
            alert("Empate!!")
        reiniciarJogo();       
        }, 100);
        return;
    }
    jogadorAtual = jogadorAtual === "X" ? "0" : "X";
};

    


function renderizarTabuleiro(){

    for(let i=0; i < tabuleiro.length; i++){
        const celula = document.getElementsByClassName("celula")[i];

        celula.textContent = tabuleiro[i];
    }

}

function verificarVitoria(){

    return verificarVencedor() !== null;
}

function verificarVencedor(){

    for(let combinacao of COMBINACOES_VITORIA){
        
        const [a, b, c] = combinacao;

        if (tabuleiro[a] && 
                tabuleiro[a] === tabuleiro[b] &&
                tabuleiro[b] === tabuleiro[c]){
                  
            return tabuleiro[a];

        }
    }

    return null;
}

function atualizarPontuacoes(vencedor){

    if(vencedor === "empate" ){
        pontuacaoEmpate++;

    } else if (vencedor === "X"){
        pontuacaoJogador++; /*JOGADOR - VOCÊ*/

    } else {
        pontuacaoComputador++;
    }

    renderizarPontuacoes();
}

function renderizarPontuacoes(){
    document.getElementById("pontuacao-Jogador").textContent =pontuacaoJogador
    document.getElementById("pontuacao-Computador").textContent =pontuacaoComputador
    document.getElementById("pontuacao-Empate").textContent =pontuacaoEmpate
}

function verificarEmpate(){
    return !tabuleiro.includes('');
}

function reiniciarJogo{
    tabuleiro    = ['','','','','','','','','',];

    jogadorAtual = "X";

    jogoAtivo    = true;

    renderizarTabuleiro();
}