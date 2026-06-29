import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/review/:slug" element={<Review />}/>
        <Route path="/reviews" element={<Reviews />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;