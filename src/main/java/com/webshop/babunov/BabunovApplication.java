package com.webshop.babunov;

import com.webshop.babunov.model.Item;
import com.webshop.babunov.model.User;
import com.webshop.babunov.service.Interfaces.ItemsService;
import com.webshop.babunov.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BabunovApplication {

    public static void main(String[] args) {
        SpringApplication.run(BabunovApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ItemsService itemsService, UserService userService) {
        return args -> {
            var item1 = new Item(1L, "Java for beginners", 150.00, "https://i.imgur.com/aWkpX3W.png");
            var item2 = new Item(2L, "Soap", 20.00, "https://i.imgur.com/aWkpX3W.png");
            var item3 = new Item(3L, "Rope", 15.00, "https://i.imgur.com/aWkpX3W.png");
            itemsService.save(item1);
            itemsService.save(item2);
            itemsService.save(item3);

            var user = new User("Ilya", "contact@babunov.dev", "pass", true);
            userService.persist(user);
        };
    }
}
