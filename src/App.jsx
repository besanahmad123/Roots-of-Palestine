import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Cities from "./pages/Cities";




// صفحات مؤقتة (جاهزين نشتغل عليهم)


function Villages() {
  return <div className="p-10 text-center">صفحة القرى</div>;
}


function Heritage() {
  return <div className="p-10 text-center">صفحة التراث</div>;
}

function Contact() {
  return <div className="p-10 text-center">صفحة التواصل</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/villages" element={<Villages />} />
        <Route path="/history" element={<History />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
