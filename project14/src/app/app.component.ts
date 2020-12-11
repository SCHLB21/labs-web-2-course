import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { WorkersDatabase } from './shared/workers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[] = [];
  privet;
  myWorkerType = MyWorkerType;
  constructor(private workersDatabase: WorkersDatabase) {}

  ngOnInit() {
    this.getData();
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  onEditById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    this.workers[index].edit === true
      ? (this.workers[index].edit = false)
      : (this.workers[index].edit = true);
  }
  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
    this.postNewWorker(worker);
  }
  async postNewWorker(worker: MyWorker) {
    try {
      await this.workersDatabase.postWorker(worker);
    } catch (err) {
      console.log(err);
    }
  }
  async getData() {
    try {
      this.workers = await this.workersDatabase.getWorkers();
    } catch (err) {
      console.log(err);
    }
  }
}
