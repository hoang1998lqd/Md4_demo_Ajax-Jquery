package com.example.demo_ajax.service.impl;

import com.example.demo_ajax.model.Room;
import com.example.demo_ajax.repository.HumanRepo;
import com.example.demo_ajax.repository.RoomRepo;
import com.example.demo_ajax.service.ICRUDRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RoomService implements ICRUDRoom {
    @Autowired
    private RoomRepo roomRepo ;
    @Override
    public List<Room> findAll() {
        return roomRepo.findAll();
    }

    @Override
    public Optional<Room> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Room save(Room room) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
