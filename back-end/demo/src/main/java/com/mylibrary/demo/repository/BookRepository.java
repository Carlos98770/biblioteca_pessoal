package com.mylibrary.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mylibrary.demo.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}