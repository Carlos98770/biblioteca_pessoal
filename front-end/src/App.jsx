import { Home } from "./pages/Home/Home";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Login } from "./pages/Login/Login";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { CadastroUser } from "./pages/CadastroUser/CadastroUser";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cadastro" element={<CadastroUser />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/books/new" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}