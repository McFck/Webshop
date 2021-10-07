package com.webshop.babunov.service;

import com.webshop.babunov.model.OrderItem;
import com.webshop.babunov.repository.OrderItemRepository;
import com.webshop.babunov.service.Interfaces.OrderItemService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional

public class OrderItemServiceR implements OrderItemService {
    private OrderItemRepository orderItemRepository;

    public OrderItemServiceR(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public OrderItem create(OrderItem orderItem) {
        return this.orderItemRepository.save(orderItem);
    }
}
