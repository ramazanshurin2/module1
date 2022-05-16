'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножница', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const definePlayerOption = (playerOption, figures) =>
    figures.findIndex(item => item.substring(0, playerOption.length).includes(playerOption));

  const isPlayerWin = (playerOption, winnerOption) => (playerOption === winnerOption) ? true : false

  const defineWinnerOption = (x, y) => {
    if ((x === 0 && y === 1) || (x === 1 && y === 0))
      return 0;
    if ((x === 1 && y === 2) || (x === 2 && y === 1))
      return 1;
    if ((x === 0 && y === 2) || (x === 2 && y === 0))
      return 2;
  }

  const getOptionString = (option) => {
    switch (option) {
      case 0: return 'камень';
      case 1: return 'ножница';
      case 2: return 'бумага';
    }
  }

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const computerOption = getRandomIntInclusive(0, 2);
      const playerOption = definePlayerOption(prompt('камень, ножница, бумага?'), FIGURES_RUS);
      if (playerOption < 0) {
        alert('Вы ввели некорректные данные!');
        return start();
      }
      if (computerOption === playerOption) {
        alert(`Ничья! Вы оба выбрали ${getOptionString(computerOption)}`);
        return start();
      }

      const winnerOption = defineWinnerOption(computerOption, playerOption);
      if (isPlayerWin(playerOption, winnerOption)) {
        result.player++;
        alert(`Вы выиграли! Вы выбрали ${getOptionString(playerOption)}, компьютер выбрал ${getOptionString(computerOption)}`);
      } else {
        result.computer++;
        alert(`Вы проиграли! Вы выбрали ${getOptionString(playerOption)}, компьютер выбрал ${getOptionString(computerOption)}`);
      }

      const wantPlayerPlayAgain = confirm('Еще?');
      if (wantPlayerPlayAgain)
        return start();
      else alert(`Результат:
        Компьютер выиграл ${result.computer} раз(а)
        Вы выиграли ${result.player} раз(а)`)
    }
  };

  window.RPS = game;
})();