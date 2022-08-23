package com.example.demo_ajax.controller;

import com.example.demo_ajax.model.Human;
import com.example.demo_ajax.service.ICRUDHuman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/people")
public class HumanController {
    @Autowired
    private ICRUDHuman icrudHuman;

    @GetMapping
    private ResponseEntity<List<Human>> findAll() {
        return new ResponseEntity<>(icrudHuman.findAll(), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Human> createHuman(@RequestBody Human human){
        return new ResponseEntity<>(icrudHuman.save(human),HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteHuman( @PathVariable Long id){
            icrudHuman.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping
    private ResponseEntity<Human> updateHuman(@RequestBody Human human){
        Optional<Human>optionalHuman = icrudHuman.findById(human.getId());
        if(optionalHuman.isPresent()){
            return new ResponseEntity<>(icrudHuman.save(human),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Human> getHuman( @PathVariable Long id){
        Optional<Human> human = icrudHuman.findById(id);
        if (human.isPresent()){
            return new ResponseEntity<>(human.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
