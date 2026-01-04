const API_URL = import.meta.env.VITE_API_URL;

export async function getBooks() {
  const response = await fetch(`${API_URL}/books`);

  if (!response.ok) {
    throw new Error("Erro ao buscar livros");
  }

//   console.log("Response:", response.json()); // Log the entire response object for debugging
  return response.json();
}
