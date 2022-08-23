package com.example.demo_ajax.repository;

import com.example.demo_ajax.model.Human;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface HumanRepo extends JpaRepository<Human, Long> {
}
