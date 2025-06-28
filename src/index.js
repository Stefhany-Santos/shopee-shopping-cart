import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWishlist = [];

const item1 = await createItem('Notebook', 20.99, 1);
const item2 = await createItem('Mouse', 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.calculateTotal(myCart);