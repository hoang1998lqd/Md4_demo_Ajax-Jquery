package com.example.demo_ajax.service;

import com.example.demo_ajax.model.Room;

import java.util.List;
import java.util.Optional;

public interface ICRUDRoom {
    List<Room> findAll();
    Optional<Room> findById(Long id);
    Room save(Room room);
    void delete(Long id);
}
