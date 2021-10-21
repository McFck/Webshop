package com.webshop.babunov.controller;

import com.webshop.babunov.dto.OrderItem;
import com.webshop.babunov.model.User;
import com.webshop.babunov.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @PostMapping(value = "/auth")
    public NewUserResponse auth(@RequestBody User user, HttpServletRequest request) {
        var wtf = request.getSession();//.setAttribute("Admin-LoggedIn", true);
        wtf.setAttribute("Admin-LoggedIn", true);
        var result = new NewUserResponse();
        result.setResult(userService.authenticate(user));
        result.setId(wtf.getId());
        return result;
    }

    public static class NewUserResponse {

        public NewUserResponse() {

        }

        private Boolean result;

        public Boolean getResult() {
            return result;
        }

        public String getId() {
            return id;
        }

        private String id;

        public void setResult(Boolean result) {
            this.result = result;
        }

        public void setId(String id) {
            this.id = id;
        }


    }
}
