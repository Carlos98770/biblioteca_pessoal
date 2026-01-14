import { Home } from "./pages/Home/Home";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/new" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}