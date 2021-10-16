package com.webshop.babunov.controller;

import com.webshop.babunov.dto.OrderItem;
import com.webshop.babunov.exceptions.ResourceNotFoundException;
import com.webshop.babunov.model.Order;
import com.webshop.babunov.service.Interfaces.ItemsService;
import com.webshop.babunov.service.Interfaces.OrderItemService;
import com.webshop.babunov.service.Interfaces.OrderService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

enum OrderStatus {
    PAID
}

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    ItemsService itemsService;
    OrderService orderService;
    OrderItemService orderItemService;

    public OrderController(ItemsService itemsService, OrderService orderService, OrderItemService orderItemService) {
        this.itemsService = itemsService;
        this.orderService = orderService;
        this.orderItemService = orderItemService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> list() {
        return this.orderService.getAllOrders();
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Order> create(@RequestBody OrderForm form) {
        List<OrderItem> formDtos = form.getItemOrders();
        validateItemsExistence(formDtos);
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
        order = this.orderService.create(order);

        List<com.webshop.babunov.model.OrderItem> orderItems = new ArrayList<>();
        for (OrderItem dto : formDtos) {
            orderItems.add(orderItemService.create(new com.webshop.babunov.model.OrderItem(order, itemsService.getItem(dto
                    .getItem()
                    .getId()), dto.getQuantity())));
        }

        order.setOrderItems(orderItems);

        this.orderService.update(order);

        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/orders/{id}")
                .buildAndExpand(order.getId())
                .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);

        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
    }

    private void validateItemsExistence(List<OrderItem> orderItems) {
        List<OrderItem> list = orderItems
                .stream()
                .filter(orderItem -> Objects.isNull(itemsService.getItem(orderItem
                        .getItem()
                        .getId())))
                .collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(list)) {
            new ResourceNotFoundException("Item not found");
        }
    }

    public static class OrderForm {

        public OrderForm() {

        }

        private List<OrderItem> itemOrders;

        public List<OrderItem> getItemOrders() {
            return itemOrders;
        }

        public void setItemOrders(List<OrderItem> itemOrders) {
            this.itemOrders = itemOrders;
        }
    }
}