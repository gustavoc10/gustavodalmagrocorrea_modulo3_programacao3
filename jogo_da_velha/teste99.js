function movimentoComputador(){
    let melhorPontuacao = -infinity;



    let movimento;

    for(let i=0;i<tabuleiro.length; i++){   

        if (tabueleiro[i] === ''){

            tabuleiro[i] = 'O';

            let pontuacao = minimax(tabuleiro, 0, false);

            tabuleiro[i] = '';

            if (pontuacao > melhorPontuacao){

                melhorPontuacao = pontuacao;

                movimento=i;
            }
        }
    }

    fazerJogada(movimento);
}
