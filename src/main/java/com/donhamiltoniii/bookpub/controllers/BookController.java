package com.donhamiltoniii.bookpub.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donhamiltoniii.bookpub.models.Book;
import com.donhamiltoniii.bookpub.models.Comment;
import com.donhamiltoniii.bookpub.repositories.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {

	@Resource
	BookRepository bookRepo;

	@GetMapping("")
	public Collection<Book> getBooks() {
		return (Collection<Book>) bookRepo.findAll();
	}

	@DeleteMapping("/{id}/delete-comment")
	public Collection<Comment> deleteBookComment(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		int commentIndex = Integer.parseInt(json.getString("commentIndex"));
		Book book = bookRepo.findById(id).get();
		book.removeComment(commentIndex);
		book = bookRepo.save(book);

		return book.getComments();
	}
}
