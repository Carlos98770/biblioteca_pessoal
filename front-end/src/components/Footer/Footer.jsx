import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Meu Projeto de Livros. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/Carlos98770">GitHub</a>
          <a href="https://www.linkedin.com/in/carlos-eduardo-906983290/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}