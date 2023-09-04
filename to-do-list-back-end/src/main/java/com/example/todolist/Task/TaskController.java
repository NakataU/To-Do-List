package com.example.todolist.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.sql.Timestamp;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api/task")
public class TaskController {
    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping(value = "/add")
    public void addTask(@RequestBody Task task) {
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());

        // Create a SimpleDateFormat object to format the time
        SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

        // Format the time portion of the Timestamp
        String formattedTime = timeFormat.format(time);
        task.setTime(formattedTime);
        taskService.addTask(task);
        System.out.println(task);
    }

    @DeleteMapping(value = "/{taskId}/delete")
    public void deleteTask(@PathVariable("courseId") Long taskId) {
        taskService.deleteTask(taskId);
    }

    @PostMapping(value = "/edit")
    public void editTask(@RequestBody Task newTask){
        
    }

}
