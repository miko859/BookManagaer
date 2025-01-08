package sk.kasv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sk.kasv.DAO.UserDAO;
import sk.kasv.entity.User;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public User getUserByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    public User getUserById(int id) {
        return userDAO.findUerById(id);
    }

    public void saveUser(User user) {
        userDAO.saveUser(user);
    }

    public void deleteUserById(int id) {
        userDAO.deleteUserById(id);
    }

    public List<User> getAllUsers() {
        return userDAO.findAllUsers();
    }
}
