import { useState } from "react";
import { createBook } from "../../services/api";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
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

      // ✅ navega após sucesso
      navigate("/");

    } catch (err) {
      setError("Erro ao cadastrar livro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Cadastrar Livro</h2>

      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Autor</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Descrição</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength={1000}
        />
      </div>

      <div className="form-group checkbox">
        <label>
          <input 
            type="checkbox"
            name="read"
            checked={formData.read}
            onChange={handleChange}
          />
          Já lido
        </label>
      </div>

      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar Livro"}
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}
