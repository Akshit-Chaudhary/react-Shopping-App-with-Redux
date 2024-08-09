import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"



const App = () => {
  return (<div>
    <div className="bg-slate-900">
      <NavBar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
  </div>)
};

export default App;
