package com.webshop.babunov.service.Interfaces;

import com.webshop.babunov.model.OrderItem;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Validated

public interface OrderItemService {
    OrderItem create(@NotNull(message = "The items for order cannot be null.") @Valid OrderItem orderItem);
}
