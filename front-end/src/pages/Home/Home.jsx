import "./Home.css";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "../../components/Carousel/Carousel";
import { getBooks, updateBookStatus } from "../../services/api"; // Importe a nova função
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ... useEffect do fetchBooks continua igual ...
  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError("Erro ao carregar livros.");
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  // --- NOVA FUNÇÃO DE ALTERAR STATUS ---
  async function handleToggleStatus(book) {
    const newStatus = !book.read; // Inverte o status atual

    // 1. Otimismo na UI: Atualiza a tela antes da API responder (fica muito rápido)
    const originalBooks = [...books]; // Backup caso dê erro
    
    setBooks((prevBooks) => 
        prevBooks.map((b) => 
            b.id === book.id ? { ...b, read: newStatus } : b
        )
    );

    try {
        // 2. Chama a API
        await updateBookStatus(book.id, newStatus);
    } catch (err) {
        // 3. Se der erro na API, desfaz a mudança na tela
        alert("Erro ao atualizar status.");
        setBooks(originalBooks);
    }
  }

  // ... (renders de loading, error e empty state) ...
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="home-container">
      <Header />

      <main className="home-content">
        <section className="dashboard-header">
          <h2>Minha Estante</h2>
          <p>Clique no card para alterar o status de leitura.</p>
        </section>

        {books.length > 0 && (
          <div className="books-display">
            <Carousel 
              items={books.map((book) => (
                <Card 
                    key={book.id} 
                    book={book} 
                    // Passamos a função para o componente filho
                    onToggleStatus={() => handleToggleStatus(book)} 
                />
              ))} 
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}