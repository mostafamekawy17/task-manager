import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private _taskService:TaskServiceService,
    private router:Router,
    private title:Title,
    private _location:Location ) {
      this.title.setTitle('Add New Task - To Do List')
     }

  ngOnInit() {
  }

  onSave(form:NgForm){
    this._taskService.onSave(form);
    this.router.navigate(['/']);
    console.log(form);

  }

  onCancel(form:NgForm) {
    form.reset();
    this._location.back();
  }

}
