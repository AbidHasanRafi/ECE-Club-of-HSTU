import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-basic">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
