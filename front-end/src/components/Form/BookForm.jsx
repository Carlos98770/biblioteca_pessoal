// components/BookForm.jsx
import { useState } from "react";
import { createBook } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function BookForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    read: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createBook(formData);
      navigate("/");
    } catch (err) {
      setError("Ocorreu um erro ao cadastrar o livro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <h2>Cadastrar Livro</h2>

      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ex: O Senhor dos Anéis"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Ex: J.R.R. Tolkien"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Escreva uma breve sinopse..."
          maxLength={1000}
        />
      </div>

      <div className="form-group checkbox">
        <input
          id="read"
          type="checkbox"
          name="read"
          checked={formData.read}
          onChange={handleChange}
        />
        <label htmlFor="read">Já terminei a leitura</label>
      </div>

      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar Livro"}
      </button>

      {error && <div className="error">⚠️ {error}</div>}
    </form>
  );
}