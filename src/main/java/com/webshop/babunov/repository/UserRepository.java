package com.webshop.babunov.repository;

import com.webshop.babunov.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

}
