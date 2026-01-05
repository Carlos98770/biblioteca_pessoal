import "./Header.css";
import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-utils">
        <h1 className="header-title">MyLibrary</h1>
        <Search onSearch={(query) => alert(`Pesquisar por: ${query}`)} />
      </div>
      <div className="header-actions">
        
        <Button text="Login" onClick={() => alert("Login clicado")} />
        <Button text="Novo Livro" variant="secondary" onClick={() => navigate("/books/new")} />

      </div>
    </header>
  );
}
