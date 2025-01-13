package sk.kasv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sk.kasv.DAO.BookDAO;
import sk.kasv.entity.Book;
import sk.kasv.entity.Status;

@Service
public class BookService {

    @Autowired
    private BookDAO bookDAO;

    public Book getBookById(int id) {
        return bookDAO.findBookById(id);
    }

    public List<Book> getAllBooks() {
        return bookDAO.findAll();
    }

    public List<Book> getBooksByStatus(Status status) {
        return bookDAO.findBookByStatus(status);
    }

    public void saveBook(Book book) {
        bookDAO.saveBook(book);
    }

    public void deleteBookById(int id) {
        bookDAO.deleteBook(id);
    }

    public void updateBook(Book book) {
        bookDAO.updateBook(book);
    }

    // public List<Book> getBooksByTitle(String title) {
    //     return bookDAO.findBookByTitle(title);
    // }

    //pri pouzivane odkomentovat v BookDAO.java a BookDAOImpl.java
}