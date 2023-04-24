import {makeAutoObservable} from 'mobx';

class CartStore {
  cart = new Set<string>();

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(id: string) {
    this.cart.add(id);
  }

  removeFromCart(id: string) {
    this.cart.delete(id);
  }

  removeAll() {
    this.cart.clear();
  }
}

export default new CartStore();
