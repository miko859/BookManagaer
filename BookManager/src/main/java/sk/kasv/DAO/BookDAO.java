package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.Book;

public interface BookDAO {
    Book findById(int id);

    List<Book> findAll();

    void save(Book book);

    void update(Book book);

    void delete(int id);

    List<Book> findByStatus(Status status);
}
