import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import Navbar from "./components/Navbar";
import { ProductContext } from "./components/ProductContext";
import AddInventory from "./pages/AddInventory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <ProductContext>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FilterableProductTable />
          </Route>
          <Route path="/add-inventory">
            <AddInventory />
          </Route>
        </Switch>
      </Router>
    </ProductContext>
  );
}
