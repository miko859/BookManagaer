package sk.kasv.controller;

import sk.kasv.entity.User;
import sk.kasv.service.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private sk.kasv.config.JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // Validate user credentials
        User foundUser = userService.getUserByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) { // Replace with hashed password validation
            // Generate JWT token
            String token = jwtUtil.generateToken(foundUser.getUsername());
            return ResponseEntity.ok(Map.of("token", token));
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}

