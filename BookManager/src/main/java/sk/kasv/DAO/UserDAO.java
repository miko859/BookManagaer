package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.User;

public interface UserDAO {

    User findByUsername(String username);

    User findUerById(int id);

    void saveUser(User user);

    void deleteUserById(int id);

    List<User> findAllUsers();

    String getUserRole(String username);
}
