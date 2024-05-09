import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
