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
  const [success, setSuccess] = useState(false); // ✅ Novo estado de sucesso

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
    setSuccess(false);

    try {
      await createBook(formData);
      
      // ✅ Feedback visual de sucesso
      setSuccess(true);
      
      // ✅ Aguarda 1.5 segundos para o usuário ver a mensagem antes de voltar
      // Isso torna a transição suave
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 1500);

    } catch (err) {
      setError("Ocorreu um erro ao cadastrar o livro. Tente novamente.");
      setLoading(false); // Só para o loading se der erro. Se der sucesso, mantemos o loading/sucesso até navegar.
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
          disabled={loading || success} // Trava inputs durante o envio
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
          disabled={loading || success}
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
          disabled={loading || success}
        />
      </div>

      <div className="form-group checkbox">
        <input
          id="read"
          type="checkbox"
          name="read"
          checked={formData.read}
          onChange={handleChange}
          disabled={loading || success}
        />
        <label htmlFor="read">Já terminei a leitura</label>
      </div>

      {/* Botão muda de texto dependendo do estado */}
      <button 
        className={`btn-submit ${success ? 'btn-success' : ''}`} 
        type="submit" 
        disabled={loading || success}
      >
        {success ? "Livro Cadastrado! ✓" : (loading ? "Salvando..." : "Salvar Livro")}
      </button>

      {/* Mensagens de Feedback */}
      {error && <div className="error">⚠️ {error}</div>}
      {success && <div className="success-message">Redirecionando para a estante...</div>}
    </form>
  );
}