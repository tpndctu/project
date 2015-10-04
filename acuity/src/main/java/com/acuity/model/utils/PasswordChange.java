package com.acuity.model.utils;

public class PasswordChange {
	private String username;
	private String passwordNew;

	public PasswordChange(String username, String passwordNew) {
		this.username = username;
		this.passwordNew = passwordNew;
	}

	public PasswordChange() {
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswordNew() {
		return passwordNew;
	}

	public void setPasswordNew(String passwordNew) {
		this.passwordNew = passwordNew;
	}

}
