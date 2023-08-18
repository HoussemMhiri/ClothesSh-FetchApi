import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdDetails from "./components/ProdDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:prodId" element={<ProdDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
