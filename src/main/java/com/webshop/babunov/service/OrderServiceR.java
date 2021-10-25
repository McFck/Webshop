package com.webshop.babunov.service;

import com.webshop.babunov.model.Order;
import com.webshop.babunov.model.User;
import com.webshop.babunov.repository.OrderRepository;
import com.webshop.babunov.service.Interfaces.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class OrderServiceR implements OrderService {

    private OrderRepository orderRepository;

    public OrderServiceR(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Iterable<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @Override
    public Order create(Order order) {
        order.setDateCreated(LocalDate.now());

        return this.orderRepository.save(order);
    }

    @Override
    public void update(Order order) {
        this.orderRepository.save(order);
    }

}
