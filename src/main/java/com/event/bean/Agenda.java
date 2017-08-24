package com.event.bean;

import javax.persistence.*;

@Entity
public class Agenda {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;

	@Column(name = "AGENDA_TIM")
	private String a_time;

	@Column(name = "AGENDA_DES")
	private String a_desc;

	@Column(name = "AGENDA_INS")
	private String a_ins;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "EVENT_ID", updatable = false, insertable = true)
	private Event event;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getaTime() {
		return a_time;
	}

	public void setaTime(String aTime) {
		this.a_time = aTime;
	}

	public String getA_desc() {
		return a_desc;
	}

	public void setA_desc(String a_desc) {
		this.a_desc = a_desc;
	}

	public String getA_ins() {
		return a_ins;
	}

	public void setA_ins(String a_ins) {
		this.a_ins = a_ins;
	}

	public void setEvent(Event event) {
		this.event = event;
	}
}
