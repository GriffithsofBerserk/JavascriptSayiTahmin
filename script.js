'use strict';

let secretNumber = Math.trunc(Math.random() * 10)+1;
let score = 0;
let highscore = 0;
let rights = 3;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    console.log(secretNumber, typeof secretNumber);

    if (rights == 0) {
        document.querySelector('.rights-number').textContent = rights;
        displayMessage('Oyun Bitti! Tekrar Başlatmalısınız.');
        return 0;
    };

    if (secretNumber === guess) {
        displayMessage('Doğru tahmin ettin!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        score +=1;
        document.querySelector('.label-scoreNumber').textContent = score;
        highscore = score;
        document.querySelector('.label-highscoreNumber').textContent = highscore;
    }
     else {
        rights -= 1;
        document.querySelector('.rights-number').textContent = rights;
        displayMessage('Tekrar Deneyin!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#ff0000';
        document.querySelector('.number').style.width = '30rem';
        score = 0;
        document.querySelector('.label-scoreNumber').textContent = score;
    };

});

