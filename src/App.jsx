import GlobalStyle from "./GlobalStyle";
import CartProvider from "./hooks/cart";

import RoutesApp from "./routes";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <GlobalStyle />
        <RoutesApp />
      </CartProvider>
    </div>
  );
}

export default App;
