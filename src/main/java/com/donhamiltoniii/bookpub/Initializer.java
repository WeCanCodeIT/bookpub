package com.donhamiltoniii.bookpub;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.donhamiltoniii.bookpub.models.Author;
import com.donhamiltoniii.bookpub.models.Book;
import com.donhamiltoniii.bookpub.models.Comment;
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
		
		Book book1 = bookRepo.save(new Book("Book1", "Book1 description", donny));
		bookRepo.save(new Book("Book2", "Book2 description", alan));
		bookRepo.save(new Book("Book3", "Book3 description", donny));
		bookRepo.save(new Book("Book4", "Book4 description", alan));
		bookRepo.save(new Book("Book5", "Book5 description", alan));
		bookRepo.save(new Book("Book6", "Book6 description", donny));
		bookRepo.save(new Book("Book7", "Book7 description", alan));
		
		Comment comment1 = new Comment("This is a comment1!");
		Comment comment2 = new Comment("This is a comment2!");
		Comment comment3 = new Comment("This is a comment3!");
		Comment comment4 = new Comment("This is a comment4!");
		Comment comment5 = new Comment("This is a comment5!");
		Comment comment6 = new Comment("This is a comment6!");
		Comment comment7 = new Comment("This is a comment7!");
		
		book1.addComment(comment2);
		book1.addComment(comment3);
		book1.addComment(comment4);
		bookRepo.save(book1);
		
		donny.addComment(comment1);
		donny.addComment(comment5);
		donny.addComment(comment6);
		donny.addComment(comment7);
		authorRepo.save(donny);
	}

}
