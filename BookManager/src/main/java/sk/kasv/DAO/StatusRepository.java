package sk.kasv.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.kasv.entity.Status;

public interface StatusRepository extends JpaRepository<Status, Integer> {
}
