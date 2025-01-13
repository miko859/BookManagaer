package sk.kasv.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "isbn")
    private String isbn;
    
    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;
    
    public Book() {
        
    }

    public Book(String title, String author, String isbn, Status status) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getTitle (){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getAuthor (){
        return author;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public String getIsbn (){
        return isbn;
    }

    public void setIsbn(String isbn){
        this.isbn = isbn;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Book " +
               "\n    id = " + id +
               ",\n    title = '" + title + '\'' +
               ",\n    author = '" + author + '\'' +
               ",\n    isbn = " + isbn +
               ",\n    status = " + status +
               "\n";
    }
}
