import "./Card.css";

export function Card({ book }) {
  const statusClass = book.read ? "available" : "unavailable";

  return (
    <article className="card">
     
      <div className="card-img">
        <img src="https://picsum.photos/200/300?random=1" alt={`Capa do livro ${book.title}`} />
      </div>

      <div className="card-infos">
        <h2 className="card-title">{book.title}</h2>
        <h3 className="author">{book.author}</h3>
        <p className="book-description">{book.description}</p>
      </div>

      <div className="card-footer">
        <span className={`status ${statusClass}`}>
          {book.read ? "Finalizado" : "Lendo"}
        </span>
      </div>
    </article>
  );
}