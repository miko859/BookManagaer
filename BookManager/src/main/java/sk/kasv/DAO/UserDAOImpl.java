package sk.kasv.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import sk.kasv.entity.User;

@Repository
@Transactional
public class UserDAOImpl implements UserDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User findByUsername(String username) {
        try {
            return entityManager.createQuery("SELECT u FROM User u WHERE u.username = :username", User.class)
                    .setParameter("username", username)
                    .getSingleResult();//ze ti najde len jedneho pouzivatela s tym menom viac nam ne treba :)
        } catch (Exception e) {
            return null; // KED NENAJDE POUZIVATELA tak VARTI TI NULU A NIE EXCEPTION
        }
    }

    @Override
    public User findUerById(int id) {
        return entityManager.find(User.class, id);
    }

    @Override
    public void saveUser(User user) {
        if (user.getId() == 0) { 
            entityManager.persist(user);
        } else { 
            entityManager.merge(user);
        }
    }

    @Override
    public void deleteUserById(int id) { //som dala podla id lebo mi to prislo lahsie nez podla mena (zmensuje ti sancu preklepu v mene pocas vymazovania)
        User user = entityManager.find(User.class, id);
        if (user != null) {
            entityManager.remove(user);
        }
    }

    @Override
    public List<User> findAllUsers() {
        return entityManager.createQuery("SELECT u FROM User u", User.class).getResultList();
    }

}
