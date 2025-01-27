package sk.kasv.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sk.kasv.config.JwtUtil;
import sk.kasv.entity.User;
import sk.kasv.service.UserService;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:52307")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // Validate user credentials
        User foundUser = userService.getUserByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            // Generate JWT token
            String token = jwtUtil.generateToken(foundUser.getUsername(), foundUser.getRole());
            return ResponseEntity.ok(Map.of("token", token));
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }
}
