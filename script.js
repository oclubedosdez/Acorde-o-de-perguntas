const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        toggleImage(question);
        togglequestoes(question);
    });
});

//função para alterna a o icone de '+' e de '-'
function toggleImage(question) {
    var image = question.querySelector('img');
    var currentSrc = image.src;
    image.classList.add

    if (currentSrc.includes('icon-plus.svg')) {
        image.src = './assets/images/icon-minus.svg';
    } else {
        image.src = './assets/images/icon-plus.svg';
    }
}
//função para mostrar as questoes
function togglequestoes(question) {
    var questao = question.querySelector('p');
    questao.classList.toggle('questao_hover')
}


/*movimentar pela pagina com o teclado*/ 

function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();

        const currentIndex = Array.from(questions).indexOf(document.activeElement);
        const nextIndex = event.key === 'ArrowDown' ? (currentIndex + 1) % questions.length : (currentIndex - 1 + questions.length) % questions.length;

        questions.forEach(article => {
            article.classList.remove('active');
        });

        questions[nextIndex].classList.add('active');
        questions[nextIndex].focus();
    }
}

questions.forEach(article => {
    article.addEventListener('keydown', handleKeyboardNavigation);
});