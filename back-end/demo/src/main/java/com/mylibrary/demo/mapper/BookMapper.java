package com.mylibrary.demo.mapper;

import com.mylibrary.demo.dto.BookRequestDTO;
import com.mylibrary.demo.dto.BookResponseDTO;
import com.mylibrary.demo.model.Book;

public class BookMapper {

    private BookMapper() {}

    public static Book toEntity(BookRequestDTO dto) {
        if (dto == null) {
            return null;
        }

        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setDescription(dto.getDescription());
        book.setRead(dto.getRead());
        return book;
    }

    
    public static BookResponseDTO toDTO(Book book) {
        if (book == null) {
            return null;
        }

        BookResponseDTO dto = new BookResponseDTO();
        dto.setId(book.getId());
        dto.setTitle(book.getTitle());
        dto.setAuthor(book.getAuthor());
        dto.setDescription(book.getDescription());
        dto.setRead(book.getRead());
        return dto;
    }
}
