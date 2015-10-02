package com.acuity.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "users")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Version
	private Long version;

	@Column(name = "username")
	private String username;
	
	@JsonIgnore
	@Column(name = "password")
	private String password;

	@Column(name = "email")
	private String email;

	@OneToMany(mappedBy = "user")
	private Set<UserRole> roles;

	private String firstName;

	private String lastName;

	@Temporal(TemporalType.DATE)
	private Date created;

	@Temporal(TemporalType.DATE)
	private Date birthDate;

	public Long getId() {
		return id;
	}

	public Long getVersion() {
		return version;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getEmail() {
		return email;
	}

	public Set<UserRole> getRoles() {
		if (this.roles == null) {
			this.roles = new HashSet<>();
		}
		return roles;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Date getCreated() {
		return created;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setRoles(Set<UserRole> roles) {
		this.roles = roles;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
}