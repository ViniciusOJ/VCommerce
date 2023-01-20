import { createContext, useState } from "react";
import iphonex from "../images/productsimg/iphone-x.png";
import iphone13 from "../images/productsimg/iphone-13.jpg";
import macBookM1 from "../images/productsimg/macbook-m1.png";
import applewatch from "../images/productsimg/apple-watch-se.png";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      title: "Iphone X",
      description: "An apple mobile which is nothing like apple",
      price: 399.9,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "Smartphones",
      images: [iphonex],
      qtd: 1,
    },
    {
      id: 2,
      title: "Iphone 13",
      description:
        "The iPhone 13 is the newest smartphone in Apple's iPhone lineup, with a new design, updated features and an improved camera. It gives you faster access to your favorite apps and its powerful high-performance processor delivers exceptional processing speed. iOS 14 is designed to make the user experience even better.",
      price: 799.99,
      rating: 3.33,
      stock: 28,
      brand: "Apple",
      category: "Smartphones",
      images: [iphone13],
      qtd: 1,
    },
    {
      id: 3,
      title: "MacBook M1",
      description:
        "The Apple MacBook M1 is a lightweight, high-performance, low-power laptop powered by Apple's new M1 chip.",
      price: 2499.99,
      rating: 1.7,
      stock: 8,
      brand: "Apple",
      category: "Smartphones",
      images: [macBookM1],
      qtd: 1,
    },
    {
      id: 4,
      title: "Apple Watch SE",
      description:
        "Apple Watch SE 40MM GPS has a built-in compass and real-time elevation information to help you go further. Syncs and streams music and podcasts. Apple Watch is equipped with NFC and GPS. It also has 32GB of memory, and battery life of up to 18 hours.",
      price: 399,
      rating: 4.2,
      stock: 67,
      brand: "Apple",
      category: " Smartwatches",
      images: [applewatch],
      qtd: 1,
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description: "Style and speed. Stand out on ...",
      price: 1499.99,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      images: [
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/DeviceFamily-Surface-Pro-7-Plus-Platinum?fmt=png-alpha&scl=1",
      ],
      qtd: 1,
    },
    {
      id: 12,
      title: "Mi 11 Lite",
      description:
        "The Xiaomi Mi 11 Lite is a mid-low range smartphone from Xiaomi, released in 2021. It features a Qualcomm Snapdragon 732G processor, storage and RAM options, a 6.55-inch AMOLED screen, rear and front cameras, a 4250 mAh battery with support fast and wireless charging.",
      price: 999.99,
      rating: 5,
      stock: 68,
      brand: "Xiaomi",
      category: "Smartphone",
      images: [
        "https://www.volevarxiaomi.com.br/wp-content/uploads/2022/03/pms_1634300956.87533336.png",
      ],
      qtd: 1,
    },
    {
      id: 15,
      title: "HoverBoard",
      description:
        "A hoverboard is a type of self-balancing electric scooter with large wheels and soft tires. They are controlled via body tilt and can reach speeds of up to 15 mph.",
      price: 579.77,
      rating: 3.8,
      stock: 6,
      brand: "Razor",
      category: "Skate",
      images: [
        "https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Hoverboa-cjp9wc8qt001n01t9k0aex2a5.png",
      ],
      qtd: 1,
    },
  ]);
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [hiddenCart, setHiddenCart] = useState(false);

  // Status Cart Open/Cose
  const CartStatus = () => {
    setCartOpen(!cartOpen);
  };

  // Add Product To Cart
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

  // Remove -1 Product To Cart
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

  // Sum +1 Product To Cart
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

  // Clear Cart
  function clearCart() {
    const newProductsData = [...productsData];
    return newProductsData.map((product) => {
      product.qtd = 1;
      setProductsData(newProductsData);
      setProductsCart([]);
    });
  }

  // Total Value Cart
  let total = 0;
  const calculateTotal = () => {
    let options = {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const valuesCart = [...productsCart];
    total = valuesCart.reduce((acc, val) => acc + val.price * val.qtd, 0);

    return new Intl.NumberFormat("pt-BR", options).format(total);
  };

  // Check-out - TotalPrice
  const checkOut = () => {
    setTotalPurchase(total);
    setCartOpen(false);
    setHiddenCart(true);
  };

  // Format Number
  const calculateValue = (value) => {
    let options = {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("pt-BR", options).format(value);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductToCart,
        aditionProductToCart,
        clearCart,
        cartOpen,
        CartStatus,
        calculateTotal,
        productsData,
        total,
        checkOut,
        totalPurchase,
        calculateValue,
        hiddenCart,
        setHiddenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
