import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks:Task[];

  constructor(
    private _taskService:TaskServiceService,
    private route:ActivatedRoute,
    private title:Title ) {
      this.title.setTitle('To Do List');
   }

   onDelete(index:number){
    this._taskService.onDelete(index);
    console.log(this.tasks);

   }


  ngOnInit() {
    this.tasks = this._taskService.getTasks();
  }

}
