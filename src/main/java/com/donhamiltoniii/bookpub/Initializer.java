package com.donhamiltoniii.bookpub;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.donhamiltoniii.bookpub.models.Book;
import com.donhamiltoniii.bookpub.repositories.BookRepository;

@Service
public class Initializer implements CommandLineRunner {
	
	@Resource
	BookRepository bookRepo;

	@Override
	public void run(String... args) throws Exception {
		bookRepo.save(new Book("Book1", "Book1 description"));
		bookRepo.save(new Book("Book2", "Book2 description"));
		bookRepo.save(new Book("Book3", "Book3 description"));
		bookRepo.save(new Book("Book4", "Book4 description"));
		bookRepo.save(new Book("Book5", "Book5 description"));
		bookRepo.save(new Book("Book6", "Book6 description"));
		bookRepo.save(new Book("Book7", "Book7 description"));
	}

}
