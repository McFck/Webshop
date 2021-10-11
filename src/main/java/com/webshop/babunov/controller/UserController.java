package com.webshop.babunov.controller;

import com.webshop.babunov.model.User;
import com.webshop.babunov.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/all")
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping(value = "/{username}")
    public User get(@PathVariable("username") String username) {
        return userService.get(username);
    }

    @PostMapping(value = "/add")
    public User persist(@RequestBody final User user) {
        return userService.persist(user);
    }

    @DeleteMapping(value = "/delete")
    public List<User> delete(@PathVariable String username) {
        return userService.delete(username);
    }

    @PutMapping(value = "/{username}/put")
    public List<User> put(@PathVariable String username, @RequestBody User user) {
        return userService.put(username, user);
    }
}
