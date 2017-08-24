package com.event.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.event.bean.Event;
import com.event.repository.EventRepository;

@Service("eventService")
public class EventServiceImp implements EventService {

	@Autowired
	private EventRepository eventRepository;

	@Override
	public List<Event> getAll() {
		// TODO Auto-generated method stub
		return eventRepository.findAll();
	}

	@Override
	public Event save(Event event) {
		// TODO Auto-generated method stub
		return eventRepository.saveAndFlush(event);

	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		eventRepository.delete(id);
	}

	@Override
	public Event find(long id) {
		// TODO Auto-generated method stub
		return eventRepository.findOne(id);
	}

}
