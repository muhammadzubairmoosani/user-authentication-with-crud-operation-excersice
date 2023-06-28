import { Provider } from "react-redux";
import { AuthProvider } from "./components/authProvider";
import store from "./store";
import "firebase/compat/auth";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  );
}

export default App;
