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
