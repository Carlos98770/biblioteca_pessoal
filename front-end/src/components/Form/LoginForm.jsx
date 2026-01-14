// components/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../services/api"; // Exemplo de import
import "./Form.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // await loginUser(credentials); // Sua chamada de API aqui
      console.log("Logando com:", credentials);
      
      // Simulação de delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate("/dashboard"); // Redireciona após login
    } catch (err) {
      setError("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <h2>Bem-vindo de volta</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="seu@email.com"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>

      {error && <div className="error">⚠️ {error}</div>}

      <div className="form-footer">
        <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
    </form>
  );
}