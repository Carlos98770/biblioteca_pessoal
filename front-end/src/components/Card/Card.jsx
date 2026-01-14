import "./Card.css";

// Recebe a prop onToggleStatus
export function Card({ book, onToggleStatus }) {
  const statusClass = book.read ? "read" : "reading";
  const statusLabel = book.read ? "Lido" : "Lendo";

  return (
    <article 
        className="card" 
        onClick={onToggleStatus} // O clique dispara a função da Home
        title="Clique para alterar o status" // Tooltip nativo
    >
      <div className="card-img">
        <img 
            src={`https://picsum.photos/seed/${book.id}/300/200`} 
            alt={`Capa do livro ${book.title}`} 
        />
        
        {/* Opcional: Um ícone overlay para indicar que é clicável */}
        <div className="card-overlay">
            <span>🔄 Alterar Status</span>
        </div>
      </div>

      <div className="card-infos">
        <h3 className="card-title">{book.title}</h3>
        <span className="author">{book.author}</span>
        <p className="card-description">{book.description}</p>
      </div>

      <div className="card-footer">
        <span className={`status ${statusClass}`}>
          {statusLabel}
        </span>
      </div>
    </article>
  );
}