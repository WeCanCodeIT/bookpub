package com.donhamiltoniii.bookpub;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.donhamiltoniii.bookpub.models.Author;
import com.donhamiltoniii.bookpub.models.Book;
import com.donhamiltoniii.bookpub.repositories.AuthorRepository;
import com.donhamiltoniii.bookpub.repositories.BookRepository;

@Service
public class Initializer implements CommandLineRunner {
	
	@Resource
	BookRepository bookRepo;
	
	@Resource
	AuthorRepository authorRepo;

	@Override
	public void run(String... args) throws Exception {
		Author donny = authorRepo.save(new Author("Donny", "Hamilton"));
		Author alan = authorRepo.save(new Author("Alan", "Kostrick"));
		
		bookRepo.save(new Book("Book1", "Book1 description", donny));
		bookRepo.save(new Book("Book2", "Book2 description", alan));
		bookRepo.save(new Book("Book3", "Book3 description", donny));
		bookRepo.save(new Book("Book4", "Book4 description", alan));
		bookRepo.save(new Book("Book5", "Book5 description", alan));
		bookRepo.save(new Book("Book6", "Book6 description", donny));
		bookRepo.save(new Book("Book7", "Book7 description", alan));
	}

}
