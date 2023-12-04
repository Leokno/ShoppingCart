import { useCart } from "../Hooks/useCart";
import { useFilters } from "../Hooks/useFilters";
import "./Footer.css";
export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      {/*JSON.stringify(filters, null, 2)*/}
      {/*JSON.stringify(cart, null, 2)*/}
      <h4>Prueba tecnica React</h4>
      <span>@leocano2000</span>
      <h5>Shopping Cart con useContext & useReducer </h5>
    </footer>
  );
}
