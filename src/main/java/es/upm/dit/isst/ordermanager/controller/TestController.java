package es.upm.dit.isst.ordermanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.ordermanager.model.User;
import es.upm.dit.isst.ordermanager.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
  @Autowired
  UserRepository userRepository;

  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN') ")
  public List<User> allAccess() {

    return (List<User>) userRepository.findAll() ;
  }

  @GetMapping("/user")
  //  @PreAuthorize("hasRole('USER') or hasRole('REPARTIDOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

 

  @GetMapping("/admin")
  // @PreAuthorize("hasRole('ROLE_ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}