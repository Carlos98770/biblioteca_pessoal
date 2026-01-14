import { useState } from "react";
import "./Carousel.css";

export function Carousel({ items }) {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);

  // Se não houver itens, não renderiza nada
  if (!items || items.length === 0) return null;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  function next() {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }

  function prev() {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }

  function getPageItems(pageIndex) {
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);

    // Preenche com placeholders invisíveis para manter o layout alinhado
    while (pageItems.length < itemsPerPage) {
      pageItems.push(
        <div className="carousel-item placeholder" key={`placeholder-${pageItems.length}`} />
      );
    }
    return pageItems;
  }

  return (
    <div className="carousel-wrapper">
      
      {/* Botão Anterior */}
      <button className="nav-btn prev" onClick={prev} aria-label="Anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div className="carousel-page" key={i}>
              {getPageItems(i).map((item, index) => (
                <div className="carousel-item-wrapper" key={index}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button className="nav-btn next" onClick={next} aria-label="Próximo">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicadores de Página (Bolinhas) */}
      <div className="carousel-indicators">
        {Array.from({ length: totalPages }).map((_, i) => (
            <span 
                key={i} 
                className={`indicator ${i === page ? 'active' : ''}`}
                onClick={() => setPage(i)}
            />
        ))}
      </div>
    </div>
  );
}