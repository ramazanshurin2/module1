'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножница', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const definePlayerOption = (playerOption, figures) =>
    figures.findIndex(item => item[0] === playerOption[0]);

  const isPlayerWin = (c, p) => !((c === 0 && p === 1) || (c === 1 && p === 2) || (c === 2 && p === 0));

  const getOptionString = (option, FIGURES) => FIGURES[option];

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const isEng = language === 'EN' || language === 'ENG';
    const FIGURES = isEng ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const computerOption = getRandomIntInclusive(0, 2);
      const chooseFigure = isEng ? 'rock, scissors, paper' : 'камень, ножница, бумага?';
      const playerOption = definePlayerOption(prompt(chooseFigure), FIGURES);
      if (playerOption < 0) {
        isEng ? alert('You have entered incorrect data!') : alert('Вы ввели некорректные данные!');
        return start();
      }
      if (computerOption === playerOption) {
        isEng ? alert(`A draw! You both chose ${getOptionString(computerOption, FIGURES)}`) : 
                alert(`Ничья! Вы оба выбрали ${getOptionString(computerOption, FIGURES)}`);
        return start();
      }

      if (isPlayerWin(computerOption, playerOption)) {
        result.player++;
        isEng ? alert(`You've won! You chose ${getOptionString(playerOption, FIGURES)}, computer chose ${getOptionString(computerOption, FIGURES)}`) :
                alert(`Вы выиграли! Вы выбрали ${getOptionString(playerOption, FIGURES)}, компьютер выбрал ${getOptionString(computerOption, FIGURES)}`); 
        
      } else {
        result.computer++;
        isEng ? alert(`You've lost! You chose ${getOptionString(playerOption, FIGURES)}, computer chose ${getOptionString(computerOption, FIGURES)}`) :
                alert(`Вы проиграли! Вы выбрали ${getOptionString(playerOption, FIGURES)}, компьютер выбрал ${getOptionString(computerOption, FIGURES)}`)
      }

      const again = isEng ? 'Still want to play?' : 'Еще хотите играть?';

      const wantPlayerPlayAgain = confirm(again);
      if (wantPlayerPlayAgain)
        return start();
      else {
        const resultText = isEng ? `Result: 
                                    Computer won ${result.computer} times
                                    You won ${result.player} times` : 
                                    `Результат: 
                                    Компьютер выиграл ${result.computer} раз(а)
                                    Вы выиграли ${result.player} раз(а)`
        alert(resultText);
      }
    }
  };

  window.RPS = game;
})();