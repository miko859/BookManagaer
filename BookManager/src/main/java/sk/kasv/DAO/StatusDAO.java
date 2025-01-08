package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.Status;

public interface StatusDAO {

    Status findById(int id);

    List<Status> findAll();

    // som vymazala save a delete lebo mi to dajak nedalo zmysel ked ze je to len >parameter< ku knihe 
}
