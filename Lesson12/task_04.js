'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,
  add(productName, productPrice, productCount = 1) {
    const newItem = {
      productName,
      productPrice,
      productCount,
    };
    this.items.push(newItem);
    this.increaseCount(productCount);
  },
  increaseCount(productCount) {
    this.count += productCount;
  },
  calculateItemPrice() {
    return this.items.reduce((total, item) =>
      total + (item.productPrice * item.productCount), 0) - this.adddiscount;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)}\n 
    Общая сумма: ${this.totalPrice}`);
  },
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },
};

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return this.calculateItemPrice();
  },
});

// cart.setDiscount("METHED");