export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
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
  {
    id: 1,
    name: 'Иван',
    surname: 'Иванов',
    phone: '+78005553535',
    type: 0,
    edit: false,
  },
  {
    id: 2,
    name: 'Петр',
    surname: 'Петров',
    phone: '+78005553535',
    type: 1,
    edit: false,
  },
  {
    id: 3,
    name: 'Сидор',
    surname: 'Сидоров',
    phone: '+78005553535',
    type: 2,
    edit: false,
  },
  {
    id: 4,
    name: 'Василий',
    surname: 'Васильев',
    phone: '+78005553535',
    type: 3,
    edit: false,
  },
];
