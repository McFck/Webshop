package com.webshop.babunov.controller;

import com.webshop.babunov.model.Item;
import com.webshop.babunov.service.Interfaces.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/items")
@CrossOrigin("*")
public class ItemController {
    @Autowired
    private ItemsService itemsService;

    public ItemController(ItemsService itemsService) {
        this.itemsService = itemsService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Item> getItems() {
        return itemsService.getAllItems();
    }
}