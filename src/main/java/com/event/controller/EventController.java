package com.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.event.bean.Event;
import com.event.service.EventService;

@RestController
@CrossOrigin(origins = "http://localhost:10001", maxAge = 3600)
@RequestMapping("api/events")
public class EventController {

	@Autowired
	private EventService eventService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Event> getAllEvents() {

		return eventService.getAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public void find(@PathVariable Long id) {
		eventService.find(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Event Save(@RequestBody Event item) {
		return eventService.save(item);

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		eventService.delete(id);
	}
}
