package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.User;

public interface UserDAO {

    User findByUsername(String username);

    User findById(int id);

    void save(User user);

    void deleteById(int id);
    
    List<User> findAll();
}
