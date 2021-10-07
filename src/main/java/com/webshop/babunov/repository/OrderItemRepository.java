package com.webshop.babunov.repository;

import com.webshop.babunov.model.OrderItem;
import com.webshop.babunov.model.OrderItemPrimaryKey;
import org.springframework.data.repository.CrudRepository;

public interface OrderItemRepository extends CrudRepository<OrderItem, OrderItemPrimaryKey> {
}