import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} MyLibrary. Todos os direitos reservados.</p>
        
        <div className="footer-links">
          {/* Adicionado target="_blank" e rel="noopener noreferrer" */}
          <a 
            href="https://github.com/Carlos98770" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visitar meu perfil no GitHub"
          >
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/carlos-eduardo-906983290/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visitar meu perfil no LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}