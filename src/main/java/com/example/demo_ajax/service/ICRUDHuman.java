package com.example.demo_ajax.service;

import com.example.demo_ajax.model.Human;

import java.util.List;
import java.util.Optional;

public interface ICRUDHuman {
    List<Human> findAll();
    Optional<Human> findById(Long id);
    Human save(Human human);
    void delete(Long id);
}
