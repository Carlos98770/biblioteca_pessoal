package com.mylibrary.demo.controller;
import com.mylibrary.demo.dto.BookResponseDTO;
import com.mylibrary.demo.dto.BookRequestDTO;
import com.mylibrary.demo.services.BookService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
// @CrossOrigin(
//         origins = "http://localhost:5173",
//         allowedHeaders = "*",
//         methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}
// )
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public BookResponseDTO create(@Valid @RequestBody BookRequestDTO dto) {
        return service.create(dto);
    }

    // READ ALL
    @GetMapping
    public List<BookResponseDTO> findAll() {
        return service.findAll();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public BookResponseDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public BookResponseDTO update(
            @PathVariable Long id,
            @RequestBody BookRequestDTO dto
    ) {
        return service.update(id, dto);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}