package sk.kasv.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import sk.kasv.entity.Book;
import sk.kasv.entity.Status;

@Repository
@Transactional
public class BookDAOImpl implements BookDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Book findBookById(int id) {
        return entityManager.find(Book.class, id);
        // neviem ci mam pouzit aj find by Name alebo nie but anyways mas to dole zakomentovane 
    }

    @Override
    public List<Book> findAll() {
        return entityManager.createQuery("SELECT b FROM Book b", Book.class).getResultList();
    }

    @Override
    public void saveBook(Book book) {
        if (book.getId() == 0) {
            entityManager.persist(book); // vytvori ti novu knihu v databaze
        } else {
            entityManager.merge(book); // vymeni ti na danej pozicii knihu za novu
        }
    }

    @Override
    public void updateBook(Book book) {
        Book bookToUpdate = entityManager.find(Book.class, book.getId());
        bookToUpdate.setTitle(book.getTitle());
        bookToUpdate.setAuthor(book.getAuthor());
        bookToUpdate.setIsbn(book.getIsbn());
        bookToUpdate.setStatus(book.getStatus());
        entityManager.merge(bookToUpdate);
    }

    @Override
    public void deleteBook(int id) {
        Book book = entityManager.find(Book.class, id);
        if (book != null) {
            entityManager.remove(book);
        }
    }

    @Override
    public List<Book> findBookByStatus(Status status) {
        return entityManager.createQuery("SELECT b FROM Book b WHERE b.status.id = :statusId", Book.class)
                .setParameter("statusId", status)
                .getResultList();
    }

    
    // @Override
    // public Book findBookByTitle(String title) {
    //     return entityManager.createQuery("SELECT b FROM Book b WHERE b.title = :name", Book.class)
    //             .setParameter("name", title).getSingleResult();
    // }

}
