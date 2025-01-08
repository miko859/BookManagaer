package sk.kasv.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import sk.kasv.entity.Status;

@Repository
@Transactional
public class StatusDAOImpl implements StatusDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Status findById(int id) {
        return entityManager.find(Status.class, id);
    }

    @Override
    public List<Status> findAll() {
        return entityManager.createQuery("SELECT s FROM Status s", Status.class).getResultList();
        // ty najde podla 1 (dostupne) alebo 2 (neni dostupne)
    }

    
}
