package com.donhamiltoniii.bookpub.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
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
}
