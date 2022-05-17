'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (isUserWon) => {
    const result = {
      playerBalls: 0,
      computerBalls: 0,
    };

    const computerGuessingIsPlayerNumberEven = () => {
      return Math.round(Math.random()) === 1 ? false : true;
    }

    const playerGuessingNumber = () => {
      const playerHiddenNumber = +prompt(`Загадайте число от 1 до ${result.playerBalls}`);

      if (Number.isNaN(playerHiddenNumber))
        return playerGuessingNumber();

      if (playerHiddenNumber > result.playerBalls || playerHiddenNumber < 0)
        return playerGuessingNumber();

      if (computerGuessingIsPlayerNumberEven()) {

        if (playerHiddenNumber % 2 === 0) {
          alert(`Компьютер выбрал четное! Он получает шарики!`);
          result.playerBalls -= playerHiddenNumber;
          result.computerBalls += playerHiddenNumber;
        }
        else {
          alert(`Компьютер выбрал четное! Вы получаете шарики!`);
          result.playerBalls += playerHiddenNumber;
          result.computerBalls -= playerHiddenNumber;
        }
      }
      else {

        if (playerHiddenNumber % 2 === 1) {
          alert(`Компьютер выбрал нечетное! Он получает шарики!`);
          result.playerBalls -= playerHiddenNumber;
          result.computerBalls += playerHiddenNumber;
        }
        else {
          alert(`Компьютер выбрал нечетное! Вы получаете шарики!`);
          result.playerBalls += playerHiddenNumber;
          result.computerBalls -= playerHiddenNumber;
        }
      }

      if (result.computerBalls < 1) {
        const wantPlayerPlayAgain = confirm('Вы выиграли, хотите сыграть еще?');
        if (wantPlayerPlayAgain) {
          const startGame = window.RPS();
          startGame();
        }
      } else
        if (result.playerBalls < 1) {
          const wantPlayerPlayAgain = confirm('Вы проиграли, хотите сыграть еще?');
          if (wantPlayerPlayAgain) {
            const startGame = window.RPS();
            startGame();
          }
        } else computerGuessingNumber();
    }

    const computerGuessingNumber = () => {
      const computerOption = getRandomIntInclusive(1, result.computerBalls);
      const isComputerGuessEvenNumber = confirm('Компьютер гадал четное число?');

      if (isComputerGuessEvenNumber) {
        if (computerOption % 2 === 0) {
          alert(`Компьютер загадал четное число (${computerOption})! Вы получате шарики`);
          result.playerBalls += computerOption;
          result.computerBalls -= computerOption;
        }
        else {
          alert(`Компьютер загадал нечетное число(${computerOption})! Он получат шарики`);
          result.playerBalls -= computerOption;
          result.computerBalls += computerOption;
        }
      }
      else {
        if (computerOption % 2 === 1) {
          alert(`Компьютер загадал нечетное число(${computerOption})! Вы получате шарики`);
          result.playerBalls += computerOption;
          result.computerBalls -= computerOption;
        }
        else {
          alert(`Компьютер загадал четное число(${computerOption})! Он получат шарики`);
          result.playerBalls -= computerOption;
          result.computerBalls += computerOption;
        }
      }

      if (result.computerBalls < 1) {
        const wantPlayerPlayAgain = confirm('Вы выиграли, хотите сыграть еще?');
        if (wantPlayerPlayAgain) {
          const startGame = window.RPS();
          startGame();
        }
      } else
        if (result.playerBalls < 1) {
          const wantPlayerPlayAgain = confirm('Вы проиграли, хотите сыграть еще?');
          if (wantPlayerPlayAgain) {
            const startGame = window.RPS();
            startGame();
          }
        } else playerGuessingNumber();
    }

    function runGame() {
      result.computerBalls = 5;
      result.playerBalls = 5;
      if (isUserWon)
        playerGuessingNumber();
      else
        computerGuessingNumber();
    }
    return runGame();
  };

  window.Marble = game;
})();