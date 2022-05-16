'use strict';

const rectangle = {
  width: 0,
  height: 0,
  setWidth(width) {
    this.width = width;
  },
  setHeight(height) {
    this.height = height;
  },
  getPerimeter() {
    return (`${(this.width + this.height) * 2} см`);
  },
  getSquare() {
    return `${this.width * this.height} см`;
  },
};

// rectangle();