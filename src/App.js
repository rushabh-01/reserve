import Header from "./Components/Header";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Bus from './Pages/Bus'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-montserrat">
      {/* <Login/>
      <Register/> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bus" element={<Bus/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
