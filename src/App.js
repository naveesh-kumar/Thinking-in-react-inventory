import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import { ProductContext } from "./components/ProductContext";

export default function App() {

  return (
    <ProductContext>
      <FilterableProductTable />  
    </ProductContext>
  )
}
