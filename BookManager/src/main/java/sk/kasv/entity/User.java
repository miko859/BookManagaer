package sk.kasv.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

    public User() {

    }

    public User(String username, String password, String role){
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getUsername (){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword (){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getRole (){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }

    @Override
    public String toString() {
        return "User " +
               "\n    id = " + id +
               ",\n    username = '" + username + '\'' +
               ",\n    password = '" + password + '\'' +
               ",\n    role = '" + role + '\'' +
               "\n";
    }
}
