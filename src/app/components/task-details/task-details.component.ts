import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  taskId;
  tasks;

  constructor( private _taskService:TaskServiceService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.tasks = this._taskService.task[this.taskId];
  }

}
