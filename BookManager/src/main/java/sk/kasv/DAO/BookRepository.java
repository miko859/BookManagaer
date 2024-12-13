package sk.kasv.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ch.qos.logback.core.status.Status;
import sk.kasv.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByStatus(Status status);
}