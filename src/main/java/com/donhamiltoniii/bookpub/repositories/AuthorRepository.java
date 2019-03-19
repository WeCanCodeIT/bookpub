package com.donhamiltoniii.bookpub.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.donhamiltoniii.bookpub.models.Author;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {

}
