function minimax(tabueleiro, profundidade, esMaximizando){

    if (resultado !== null){
        return resultado === 'O' ? 10 - profundidade : profundidade -10;

        }
    
    if (estaMaximizado){
        let melhorPontuacao = -Infinity;
        for (let i=0; i < tabueleiro.length; i++){
            if (tabuleiro[i] === ''){
                
                tabuleiro[i] = 'O';

                let pontuacao = minimax(tabuleiro, profundidade + 1, false);

                tabuleiro[i] = '';

                melhorPontuacao = Math.max(pontuacao, melhorPontuacao)
            }

        }
        return melhorPontuacao;
}
    else{
        let melhorPontuacao = Infinity;
        for (let i=0; i<tabueleiro.length; i++){
            if (tabuleiro[i] === '') {

                tabuleiro[i] = 'X';

                let pontuacao = minimax(tabuleiro, profundidade + 1, true);

                tabuleiro[i] = '';

                melhorPontuacao = Math.min(pontuacao, melhorPontuacao);
            }

        }
        return melhorPontuacao
    }
}