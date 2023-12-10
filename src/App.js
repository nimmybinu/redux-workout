import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />}></Route>
          <Route
            exact
            path="/product/:pdtId"
            element={<ProductDetail />}
          ></Route>
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
