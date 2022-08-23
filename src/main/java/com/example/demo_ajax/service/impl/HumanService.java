package com.example.demo_ajax.service.impl;

import com.example.demo_ajax.model.Human;
import com.example.demo_ajax.repository.HumanRepo;
import com.example.demo_ajax.service.ICRUDHuman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HumanService implements ICRUDHuman {
    @Autowired
    private HumanRepo humanRepo ;

    @Override
    public List<Human> findAll() {
        return humanRepo.findAll();
    }

    @Override
    public Optional<Human> findById(Long id) {
        return humanRepo.findById(id);
    }

    @Override
    public Human save(Human human) {
        return humanRepo.save(human);
    }

    @Override
    public void delete(Long id) {
        humanRepo.deleteById(id);
    }
}
