const API_URL = import.meta.env.VITE_API_URL;

export async function getBooks() {
  const response = await fetch(`${API_URL}/books`);

  if (!response.ok) {
    throw new Error("Erro ao buscar livros");
  }

//   console.log("Response:", response.json()); // Log the entire response object for debugging
  return response.json();
}

export async function createBook(book){
    fetch(`${API_URL}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    )
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao criar livro');
        }
        return response.json();

    })
    .then(data => {
        console.log('Livro criado com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });

}

export async function updateBookStatus(bookId, newStatus) {
  // Simula uma chamada de rede (delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Livro ${bookId} atualizado para: ${newStatus ? "Lido" : "Lendo"}`);
      resolve({ success: true });
    }, 500); // 0.5 segundos de delay
  });
  
  // Numa API real seria algo como:
  // const response = await fetch(`http://api.com/books/${bookId}`, {
  //   method: 'PATCH',
  //   body: JSON.stringify({ read: newStatus })
  // });
  // return response.json();
}
