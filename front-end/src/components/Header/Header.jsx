import "./Header.css";
import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import { useNavigate, Link } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    // 1. Limpa os dados de autenticação (Exemplo)
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    
    // 2. Redireciona para a Landing Page
    
    setTimeout(() => {
        navigate("/"); 
      }, 1500);
  }

  

  return (
    <header className="header">
      <div className="header-utils">
        {/* Transformamos o H1 em um Link para a home do usuário logado */}
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="header-title">MyLibrary</h1>
        </Link>
        
        {/* Passamos a função de busca (você terá que implementar a lógica na Home depois) */}
        <Search onSearch={(query) => console.log(`Filtrando por: ${query}`)} />
      </div>

      <div className="header-actions">
        {/* Inverti a ordem: Ação principal à direita, Logout à esquerda ou secundário */}
        <Button 
            text="Novo Livro" 
            variant="primary" // Se tiver essa variante, use para destacar
            onClick={() => navigate("/books/new")} 
        />
        
        <Button 
            text="Sair" 
            variant="logout" 
            onClick={handleLogout} 
        />
      </div>
    </header>
  );
}