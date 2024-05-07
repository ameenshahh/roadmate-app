import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <ProductsPage />
      <LoginPage />
      <SignUpPage />
    </div>
  );
}

export default App;
