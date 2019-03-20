package com.donhamiltoniii.bookpub.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Author {

	@Id
	@GeneratedValue
	private Long id;
	private String firstName;
	private String lastName;
	
	@OneToMany(mappedBy="author")
	private Collection<Book> books;
	
	@ElementCollection
	@CollectionTable
	private Collection<Comment> comments;

	public Author() {}

	public Author(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.comments = new ArrayList<Comment>();
	}

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Collection<Book> getBooks() {
		return books;
	}
	
	public Collection<Comment> getComments() {
		return comments;
	}

	public void addComment(Comment comment) {
		comments.add(comment);
	}

	@Override
	public String toString() {
		return "Author [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", books=" + books + "]";
	}
}
