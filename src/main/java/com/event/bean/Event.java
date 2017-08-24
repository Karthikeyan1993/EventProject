package com.event.bean;

import java.util.List;
import javax.persistence.*;

@Entity
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EVENT_ID")
	private Long Id;

	@Column(name = "EVENT_DM")
	private String eFullDte;

	@Column(name = "EVENT_DTE")
	private String eDate;

	@Column(name = "EVENT_MON")
	private String eMonth;

	@Column(name = "EVENT_LOC")
	private String eLocation;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinColumn(name = "EVENT_ID")
	private List<Agenda> agenda;

	public Long geteId() {
		return Id;
	}

	public void seteId(Long Id) {
		this.Id = Id;
	}

	public String geteFullDte() {
		return eFullDte;
	}

	public void seteFullDte(String eFullDte) {
		this.eFullDte = eFullDte;
	}

	public String geteDate() {
		return eDate;
	}

	public void seteDate(String eDate) {
		this.eDate = eDate;
	}

	public String geteMonth() {
		return eMonth;
	}

	public void seteMonth(String eMonth) {
		this.eMonth = eMonth;
	}

	public String geteLocation() {
		return eLocation;
	}

	public void seteLocation(String eLocation) {
		this.eLocation = eLocation;
	}

	public List<Agenda> getAgenda() {
		return agenda;
	}

	public void setAgenda(List<Agenda> agenda) {
		this.agenda = agenda;
	}

}
