'use strict';

const generatedNumberByBot = Math.round(Math.random() * 100);

const runGame = () => {
  const userNumber = +prompt('Введите число до 100 ');

  if (Number.isNaN(userNumber)) {
    alert('Введи число!');
    runGame();
  }

  if (!userNumber) {
    return;
  }

  if (userNumber < generatedNumberByBot) {
    alert('Больше!');
    runGame();
  }

  if (userNumber > generatedNumberByBot) {
    alert('Меньше!');
    runGame();
  }

  if (userNumber === generatedNumberByBot) {
    alert('Правильно!');
    return;
  }
};

// runGame();