import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId;
  tasks:Task[];
  task:Task;

  constructor(
    private _taskService:TaskServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private title:Title ) {
      this.title.setTitle('Edit Task - To Do List')
     }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.tasks = this._taskService.getTasks();
  }

  onUpdate(f:NgForm) {
    this._taskService.onUpdate(f,this.taskId);
    this.router.navigate(['/']);
  }

  onDelete(){
    this._taskService.onDelete(this.taskId);
  }

}
