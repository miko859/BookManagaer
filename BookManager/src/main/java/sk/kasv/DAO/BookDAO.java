package sk.kasv.DAO;

import java.util.List;

import sk.kasv.entity.Book;
import sk.kasv.entity.Status;

public interface BookDAO {
    Book findBookById(int id);

    // Book findBookByTitle(String title);  vysvetlenie je vo BookDAOImpl.java

    List<Book> findAll();

    void saveBook(Book book);

    void updateBook(Book book);

    void deleteBook(int id);

    List<Book> findBookByStatus(Status status);
}
