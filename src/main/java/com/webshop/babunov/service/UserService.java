package com.webshop.babunov.service;

import com.webshop.babunov.model.User;
import com.webshop.babunov.repository.OrderRepository;
import com.webshop.babunov.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAll() {
        return (List<User>) userRepository.findAll();
    }

    public User get(@PathVariable("username") String username) {
        return userRepository.findById(username).get();
    }

    public User persist(@RequestBody final User user) {
        userRepository.save(user);
        return userRepository.findById(user.getUsername()).get();
    }

    public List<User> delete(@PathVariable String username) {
        userRepository.deleteById(username);
        return (List<User>) userRepository.findAll();
    }

    public boolean authenticate(@RequestBody User user){
        if(userRepository.existsById(user.getUsername())){
            return Objects.equals(userRepository.findById(user.getUsername()).get().getPassword(), user.getPassword());
        }
        return false;
    }

    public List<User> put(@PathVariable String username, @RequestBody User user) {
        if (userRepository.existsById(username)) {
            userRepository.deleteById(username);
            userRepository.save(user);
        }

        return (List<User>) userRepository.findAll();
    }
}
