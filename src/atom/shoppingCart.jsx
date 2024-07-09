import { atom } from "jotai";
import store from "./store";

const shoppingCartAtom = atom([]);

const addProduct = (product) => {
  console.log(product);

  store.set(shoppingCartAtom, (prev) => {
    // Check if the product already exists in the cart
    const existingProductIndex = prev.findIndex(
      (item) => item.productID === product.productID,
    );
    if (existingProductIndex >= 0) {
      // Product exists, increment its quantity
      return prev.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      // Product doesn't exist, add it with quantity of 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};

const addQuantity = (productID) => {
  store.set(shoppingCartAtom, (prev) =>
    prev.map((item) => {
      if (item.productID === productID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }),
  );
};

const subtractQuantity = (productID) => {
  store.set(shoppingCartAtom, (prev) =>
    prev.map((item) => {
      if (item.productID === productID && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }),
  );
};

export { shoppingCartAtom, addProduct, addQuantity, subtractQuantity };
