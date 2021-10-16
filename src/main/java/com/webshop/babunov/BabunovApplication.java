package com.webshop.babunov;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.webshop.babunov.controller.OrderController;
import com.webshop.babunov.dto.OrderItem;
import com.webshop.babunov.model.Item;
import com.webshop.babunov.model.User;
import com.webshop.babunov.service.Interfaces.ItemsService;
import com.webshop.babunov.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class BabunovApplication {

    public static void main(String[] args) {
        SpringApplication.run(BabunovApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ItemsService itemsService, UserService userService) {
        return args -> {
            var item1 = new Item(1L, "Java for beginners", 150.00, "https://i.imgur.com/aWkpX3W.png", "You will need this");
            var item2 = new Item(2L, "Soap", 20.00, "https://i.imgur.com/aWkpX3W.png", "Better buy with rope");
            var item3 = new Item(3L, "Rope", 15.00, "https://i.imgur.com/aWkpX3W.png", "Better buy with soap");
            var item4 = new Item(4L, "Long Book", 1555.00, "https://i.imgur.com/aWkpX3W.png", "Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Не следует, однако забывать.");
            itemsService.save(item1);
            itemsService.save(item2);
            itemsService.save(item3);
            itemsService.save(item4);

            var user = new User("Ilya", "contact@babunov.dev", "pass", true);
            userService.persist(user);


            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
            var object = new OrderController.OrderForm();
            var arr = new ArrayList<OrderItem>();
            var orderItem = new OrderItem();
            orderItem.setItem(item1);
            orderItem.setQuantity(1);
            arr.add(orderItem);
            object.setItemOrders(arr);
            String json = ow.writeValueAsString(object);
            System.out.println("WARNING!!! " + json);
        };
    }
}
