package com.event.service;

import java.util.List;

import com.event.bean.Event;

public interface EventService {

	public List<Event> getAll();

	public Event save(Event event);

	public Event find(long id);

	public void delete(Long id);

}
