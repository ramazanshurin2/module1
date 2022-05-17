'use strict';

(() => {
  const FIGURES = ['камень', 'ножница', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const definePlayerOption = (playerOption, figures) =>
    figures.findIndex(item => item[0] === playerOption[0]);

  const isPlayerWin = (c, p) => !((c === 0 && p === 1) || (c === 1 && p === 2) || (c === 2 && p === 0));

  const getOptionString = (option, FIGURES) => FIGURES[option];

  const game = () => {
    const result = {
      playerBalls: 0,
      computerBalls: 0,
    };

    return function start() {
      const computerOption = getRandomIntInclusive(0, 2);
      const chooseFigure = 'камень, ножница, бумага?';
      const playerOption = definePlayerOption(prompt(chooseFigure), FIGURES);
      if (playerOption < 0) {
        alert('Вы ввели некорректные данные!');
        return start();
      }
      if (computerOption === playerOption) {
        alert(`Ничья! Вы оба выбрали ${getOptionString(computerOption, FIGURES)}`);
        return start();
      }


      if (isPlayerWin(computerOption, playerOption)) {
        alert(`Вы выиграли! Вы выбрали ${getOptionString(playerOption, FIGURES)}, компьютер выбрал ${getOptionString(computerOption, FIGURES)}`);
        const startMarbleGame = window.Marble(true);
        try {
          startMarbleGame();
        } catch {}
      } 
      else {
        alert(`Вы проиграли! Вы выбрали ${getOptionString(playerOption, FIGURES)}, компьютер выбрал ${getOptionString(computerOption, FIGURES)}`)
        const startMarbleGame = window.Marble(false);
        try {
          startMarbleGame();
        } catch {}
      }
    }
  };

  window.RPS = game;
})();