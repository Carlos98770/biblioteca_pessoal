import { useState } from "react";
import "./Carousel.css";

export function Carousel({ items }) {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  function next() {
    setPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  }

  function prev() {
    setPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  }

  function getPageItems(pageIndex) {
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;

    const pageItems = items.slice(start, end);

    // 👉 repete o último item se faltar
    while (pageItems.length < itemsPerPage) {
      pageItems.push(
        <div className="placeholder" key={`placeholder-${pageItems.length}`} />
      );
    }

    return pageItems;
  }

  return (
    <div className="carousel-wrapper">
      <button className="nav prev" onClick={prev}>
        ⬅
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div className="carousel-page" key={i}>
              {getPageItems(i).map((item, index) => (
                <div className="carousel-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button className="nav next" onClick={next}>
        ➡
      </button>
    </div>
  );
}
