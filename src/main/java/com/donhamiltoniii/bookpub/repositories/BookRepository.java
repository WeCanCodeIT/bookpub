package com.donhamiltoniii.bookpub.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.donhamiltoniii.bookpub.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

}
