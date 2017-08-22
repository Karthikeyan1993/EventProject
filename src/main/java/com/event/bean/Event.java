package com.event.bean;

import java.util.List;
import javax.persistence.*;

@Entity
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EVENT_ID")
	private Long eId;

	@Column(name = "EVENT_DM")
	private String eFullDte;

	@Column(name = "EVENT_DTE")
	private String eDate;

	@Column(name = "EVENT_MON")
	private String eMonth;

	@Column(name = "EVENT_LOC")
	private String eLocation;

	@Column(name = "EVENT_STS")
	private Boolean eIsActive;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinColumn(name = "EVENT_ID")
	private List<Agenda> agenda;

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Event(String eFullDte, String eDate, String eMonth, String eLocation, Boolean eIsActive) {
		super();
		this.eFullDte = eFullDte;
		this.eDate = eDate;
		this.eMonth = eMonth;
		this.eLocation = eLocation;
		this.eIsActive = eIsActive;

	}

	public Long geteId() {
		return eId;
	}

	public void seteId(Long eId) {
		this.eId = eId;
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

	public Boolean geteIsActive() {
		return eIsActive;
	}

	public void seteIsActive(Boolean eIsActive) {
		this.eIsActive = eIsActive;
	}

	public List<Agenda> getAgenda() {
		return agenda;
	}

	public void setAgenda(List<Agenda> agenda) {
		this.agenda = agenda;
	}

}
