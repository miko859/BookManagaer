package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.Status;

public interface StatusDAO {

    Status findById(int id);

    List<Status> findAll();

    void save(Status status);
    
    void deleteById(int id);
}
