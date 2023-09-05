package com.example.todolist.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepo taskRepo;

    @Autowired
    public TaskService(TaskRepo taskRepo) {
        this.taskRepo = taskRepo;
    }

    public void addTask(Task task){
        taskRepo.saveAndFlush(task);
    }

    public Optional<Task> findById(Long id){
        return taskRepo.findById(id);
    }
    public List<Task> findAll(){
        return taskRepo.findAll();
    }

    public void deleteTask(Long taskId){
        boolean exists = taskRepo.existsById(taskId);
        if(!exists){
            throw new IllegalArgumentException("Task with id" + taskId + "does not exist");
        }
        taskRepo.deleteById(taskId);
    }
}
