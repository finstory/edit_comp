import { AppMain } from "./router/AppMain";
import { store } from "./redux/store/store";
import { ContextProvider } from "./context/context";
import { Provider } from "react-redux";
import { Dashboard } from "./pages/Dashboard";
import "./assets/css/index.css";

function App() {
  return (
    <div className="app_container">
      <Dashboard />
    </div>
  );
}

export default App;
