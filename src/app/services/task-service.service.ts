import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  task:Task[] ;

  constructor( private route:ActivatedRoute) {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.task = JSON.parse(savedTasks);
    }
    else {
      this.task = []
    }
  }

  onDelete(index:number) {
    this.task.splice(index, 1);
    this.saveAll();
  }

  onSave(form:NgForm){
    this.task.push({
      title:form.value.title,
      description:form.value.description
    });
    this.saveAll();
  }

  getTasks() {
    return this.task;
  }

  onUpdate(form:NgForm,id) {
   this.task[id] = {title:form.value.title,description:form.value.description};
   this.saveAll();
  }

  saveAll() {
    localStorage.setItem('tasks',JSON.stringify(this.task))
  }
}
