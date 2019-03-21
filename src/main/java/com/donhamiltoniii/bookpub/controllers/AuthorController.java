package com.donhamiltoniii.bookpub.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donhamiltoniii.bookpub.models.Author;
import com.donhamiltoniii.bookpub.repositories.AuthorRepository;

@RestController
@RequestMapping("/authors")
public class AuthorController {

	@Resource
	AuthorRepository authorRepo;

	@GetMapping("")
	public Collection<Author> getAuthors() {
		return (Collection<Author>) authorRepo.findAll();
	}

	@PostMapping("/add")
	public Collection<Author> addAuthor(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String firstName = json.getString("firstName");
		String lastName = json.getString("lastName");
		authorRepo.save(new Author(firstName, lastName));
		return (Collection<Author>) authorRepo.findAll();
	}
}
