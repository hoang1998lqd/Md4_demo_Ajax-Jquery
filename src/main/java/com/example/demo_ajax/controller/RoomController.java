package com.example.demo_ajax.controller;

import com.example.demo_ajax.model.Room;
import com.example.demo_ajax.service.ICRUDRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/rooms")
public class RoomController {
    @Autowired
    private ICRUDRoom icrudRoom;

    @GetMapping
    private ResponseEntity<List<Room>> findAll() {
        return new ResponseEntity<>(icrudRoom.findAll(), HttpStatus.OK);
    }
}
