import { products as initialProducts } from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./Hooks/useFilters";
import { Cart } from "./Components/Cart";
import { Cartprovider } from "./Context/cart";
function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <Cartprovider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </Cartprovider>
  );
}

export default App;
