import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);


  function addProductToCart(produto) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === produto.id);

    if (!item) {
      copyProductsCart.push(produto);
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  }

  function aditionProductToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (!item) {
      copyProductsCart.push(id);
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  }

  const calculateTotal = () => {
    let total = 0;
    productsCart.forEach((item) => {
      total += item.price * item.qtd;
    });
    return total.toFixed(2);
  };


  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductToCart,
        aditionProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
