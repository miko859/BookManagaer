package sk.kasv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sk.kasv.entity.Status;
import sk.kasv.service.StatusService;

@RestController
@RequestMapping("/api/statuses")
public class StatusController {

    @Autowired
    private StatusService statusService;

    @GetMapping("/{id}")
    public Status getStatusById(@PathVariable int id) {
        return statusService.getStatusById(id);
    }

    @GetMapping
    public List<Status> getAllStatuses() {
        return statusService.getAllStatuses();
    }
}
