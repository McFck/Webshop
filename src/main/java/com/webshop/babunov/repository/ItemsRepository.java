package com.webshop.babunov.repository;
import com.webshop.babunov.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemsRepository extends CrudRepository<Item, Long> {
}