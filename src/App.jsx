import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import LoginPage from "./pages/LoginPage";
import DestinationPage from "./pages/DestinationPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cities" element={<CitiesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/destination/:cityId" element={<DestinationPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
