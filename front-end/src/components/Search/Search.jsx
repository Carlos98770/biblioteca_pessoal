import { useState } from "react";
import "./Search.css";
import { Button } from "../Button/Button";

export function Search({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSearch() {
    onSearch(value);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button text="Buscar" variant="search" onClick={handleSearch} />
    </div>
  );
}
