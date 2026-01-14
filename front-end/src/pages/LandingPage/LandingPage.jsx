import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <div className="landing-container">
      {/* Barra de Navegação Simples */}
      <header className="landing-header">
        <h1 className="logo">My<span>Library</span></h1>
        <nav>
          <Link to="/login" className="nav-link">Entrar</Link>
          <Link to="/cadastro" className="btn-header">Criar Conta</Link>
        </nav>
      </header>

      <main className="landing-content">
        {/* Seção Hero (Destaque) */}
        <section className="hero">
          <h1>Sua estante virtual, <br /> <span className="highlight">organizada e simples.</span></h1>
          <p className="subtitle">
            Gerencie suas leituras, salve seus livros favoritos e nunca mais esqueça
            o que você já leu. Tudo em um só lugar.
          </p>
          
          <div className="cta-group">
            <Link to="/cadastro" className="btn-primary">
              Começar Agora
            </Link>
            <Link to="/login" className="btn-secondary">
              Já tenho conta
            </Link>
          </div>
        </section>

        {/* Seção de Recursos (Features) */}
        <section className="features">
          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Organize</h3>
            <p>Cadastre seus livros com título, autor e descrição de forma rápida.</p>
          </div>
          <div className="feature-card">
            <div className="icon">✅</div>
            <h3>Controle</h3>
            <p>Marque os livros que você já leu e separe os que ainda vai ler.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Evolua</h3>
            <p>Acompanhe seu progresso de leitura em uma interface limpa e moderna.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}