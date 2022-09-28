import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreatePage from "./pages/CreatePage";
import ExistingPage from "./pages/ExistingPage";
import store from "./stores/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="create/*" element={<CreatePage />} />
            <Route path="existing/*" element={<ExistingPage />} />
            <Route path="/*" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
