export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  edit: boolean;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, edit: false },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, edit: false },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, edit: false },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, edit: false },
];
