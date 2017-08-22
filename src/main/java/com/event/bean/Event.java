package com.event.bean;

import java.util.List;
import javax.persistence.*;

@Entity
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EVENT_ID")
	private Long eId;

	@Column(name = "EVENT_DTE")
	private String eDate;

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

	public Event(String eDate, String eLocation, Boolean eIsActive) {
		super();
		this.eDate = eDate;
		this.eLocation = eLocation;
		this.eIsActive = eIsActive;
	}

	public Long getId() {
		return eId;
	}

	public void setId(Long eid) {
		eId = eid;
	}

	public String geteDate() {
		return eDate;
	}

	public void seteDate(String eDate) {
		this.eDate = eDate;
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
