package com.donhamiltoniii.bookpub.models;

import javax.persistence.Embeddable;

@Embeddable
public class Comment {

	private String content;

//	private Book book;
	
	public Comment() {}
	
	public Comment(String content) {
		this.content = content;
	}

	public String getContent() {
		return content;
	}

	@Override
	public String toString() {
		return "Comment [content=" + content + "]";
	}
	
}
