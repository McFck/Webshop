package com.webshop.babunov.service;

import com.webshop.babunov.model.Item;
import com.webshop.babunov.repository.ItemsRepository;
import com.webshop.babunov.exceptions.ResourceNotFoundException;
import com.webshop.babunov.service.Interfaces.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ItemsServiceR implements ItemsService {
    @Autowired
    private ItemsRepository itemsRepository;

    public ItemsServiceR(ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    @Override
    public Iterable<Item> getAllItems() {
        return itemsRepository.findAll();
    }

    @Override
    public Item getItem(long id) {
        return itemsRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found"));
    }

    @Override
    public Item save(Item item) {
        return itemsRepository.save(item);
    }
}
