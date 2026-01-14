import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { registerUser } from "../../services/api"; // Sua função de API
import "./Form.css"; // Usa o CSS compartilhado existente

export default function CadastroForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpa o erro quando o usuário começa a corrigir
    if (error) setError(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // --- Validações Locais ---
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }
    // -------------------------

    setLoading(true);

    try {
      // await registerUser({ name: formData.name, email: formData.email, password: formData.password });
      
      // Simulação de API
      console.log("Enviando cadastro:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSuccess(true);
      // Redireciona após o feedback visual
      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      // Exemplo de tratamento de erro da API
      setError(err.message || "Erro ao criar conta. Tente outro e-mail.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      {/* Header simples e direto, consistente com o estilo */}
      <div className="form-header-simple">
        <h2>Criar Conta</h2>
        <p>Preencha os dados abaixo para começar.</p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ex: João da Silva"
          required
          disabled={loading || success}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          required
          disabled={loading || success}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mínimo 6 caracteres"
          required
          disabled={loading || success}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Repita a senha"
          required
          disabled={loading || success}
        />
      </div>

      {error && <div className="error">⚠️ {error}</div>}
      
      {success && (
        <div className="success-message">
          ✅ Cadastro realizado! Redirecionando...
        </div>
      )}

      <button 
        className={`btn-submit ${success ? 'btn-success' : ''}`} 
        type="submit" 
        disabled={loading || success}
      >
        {loading ? "Criando conta..." : (success ? "Sucesso!" : "Cadastrar")}
      </button>

      <div className="form-footer">
        <p>Já possui uma conta? <Link to="/login">Faça Login</Link></p>
      </div>
    </form>
  );
}