import GlobalStyle from "./GlobalStyle";
import CartProvider from "./hooks/cart";


import RoutesApp from "./routes";

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <RoutesApp />
      </CartProvider>
    </>
  );
}

export default App;
