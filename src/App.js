import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import foto2 from "./assets/img/foto2.jpeg";

export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="contacto" element={<Contacto />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);