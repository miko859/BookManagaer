package sk.kasv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sk.kasv.DAO.StatusDAO;
import sk.kasv.entity.Status;

@Service
public class StatusService {

    @Autowired
    private StatusDAO statusDAO;
    
    public Status getStatusById(int id) {
        return statusDAO.findById(id);
    }


    public List<Status> getAllStatuses() {
        return statusDAO.findAll();
    }
    
}
