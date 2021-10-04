package com.webshop.babunov.service.Interfaces;

import com.webshop.babunov.model.Item;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ItemsService {

    @NotNull Iterable<Item> getAllItems();

    Item getItem(@Min(value = 1L, message = "Wrong item ID!") long id);

    Item save(Item item);
}