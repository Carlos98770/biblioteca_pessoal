package com.mylibrary.demo.services;
import org.springframework.stereotype.Service;
import com.mylibrary.demo.dto.BookRequestDTO;
import com.mylibrary.demo.dto.BookResponseDTO;
import com.mylibrary.demo.model.Book;
import com.mylibrary.demo.repository.BookRepository;
import com.mylibrary.demo.mapper.BookMapper;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookResponseDTO create(BookRequestDTO bookRequestDTO) {
        Book book = BookMapper.toEntity(bookRequestDTO);
        Book savedBook = bookRepository.save(book);
        return BookMapper.toDTO(savedBook);
    }

    public List<BookResponseDTO> findAll() {
        List<Book> books = bookRepository.findAll();
        return books.stream()
                    .map(BookMapper::toDTO)
                    .collect(Collectors.toList());
    }

    public BookResponseDTO findById(Long id) {
        Book book = bookRepository.findById(id)
                                  .orElseThrow(() -> new RuntimeException("Book not found"));
        return BookMapper.toDTO(book);
    }

    public BookResponseDTO update(Long id, BookRequestDTO bookRequestDTO) {
        Book existingBook = bookRepository.findById(id)
                                          .orElseThrow(() -> new RuntimeException("Book not found"));

        existingBook.setRead(bookRequestDTO.getRead());
        Book updatedBook = bookRepository.save(existingBook);
        return BookMapper.toDTO(updatedBook);
    }

    public void delete(Long id) {
        Book existingBook = bookRepository.findById(id)
                                          .orElseThrow(() -> new RuntimeException("Book not found"));
        bookRepository.delete(existingBook);
    }


    
}
