let quantidadeAlugados = 0;

function contarJogosAlugados(qtde) {
    if (qtde > 1) {
        console.log(`Ao todo foram alugados ${qtde} jogos`);
    } else if (qtde < 1) {
        console.log(`Ao todo não foi alugado nenhum jogo`);
    } else {
        console.log(`Ao todo foi alugado ${qtde} jogo`);
    }
}

function alterarStatus(id) {
    const botao = document.querySelector(`#game-${id} a`);
    const imagem = document.querySelector(`#game-${id} div`);

    if (!botao.classList.contains('dashboard__item__button--return')) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        quantidadeAlugados++;
    } else {
        if (confirm('Você tem certeza que deseja devolver este jogo ?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            quantidadeAlugados--;
        }
    }
    console.log(quantidadeAlugados);
    contarJogosAlugados(quantidadeAlugados);
}

document.addEventListener('DOMContentLoaded', function () {
    quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados(quantidadeAlugados);
});