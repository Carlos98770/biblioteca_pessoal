import "./Home.css";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "../../components/Carousel/Carousel";
import { getBooks } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  // const books = [
  //   { id: 1, title: "Book One", author: "Author A", description: "This is a description of Book One.", status: true },
  //   { id: 2, title: "Book Two", author: "Author B", description: "This is a description of Book Two.", status: false },
  //   { id: 3, title: "Book Three", author: "Author C", description: "This is a description of Book Three.", status: true },
  //   { id: 4, title: "Book Four", author: "Author D", description: "This is a description of Book Four.", status: true },
  // ];  
 

  return (
    <div className="home">

      <Header />      
      <Carousel items={books.map(book => <Card key={book.id} book={book} />)} />
      <Footer />
    </div>
  );
}
