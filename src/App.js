import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./views/home/FirstPage";
import GlobalSearch from "./views/search/GlobalSearch";
import Product from "./views/Product/Product";

function App() {
  return (
    <div>
      <FirstPage />
      <GlobalSearch />
      <Product />
    </div>
  );
}

export default App;
