import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  phone: string;
  type = 0;
  mask = [
    '+',
    '7',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    type: new FormControl(0),
  });
  onAddWorker() {
    // console.log(this.addForm.get('phone'));
    // if (
    //   this.name === undefined ||
    //   this.surname === undefined ||
    //   this.name === '' ||
    //   this.surname === ''
    // ) {
    //   alert('Заполните все поля');
    //   this.name = '';
    //   this.surname = '';
    //   return;
    // }
    this.addWorker.emit({
      name: this.addForm.value.name,
      surname: this.addForm.value.surname,
      phone: this.addForm.value.phone,
      type: this.addForm.value.type,
      edit: false,
    });
    // this.name = '';
    // this.surname = '';
    this.addForm.setValue({ name: '', surname: '', phone: '', type: 0 });
  }
}
