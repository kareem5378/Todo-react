//Import provider
import { Provider } from "react-redux";
//Import Store
import store from "./store/store";
//Import main page
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
