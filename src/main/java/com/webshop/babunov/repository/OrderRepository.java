package com.webshop.babunov.repository;

import com.webshop.babunov.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}