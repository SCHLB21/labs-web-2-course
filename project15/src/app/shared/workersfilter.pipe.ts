import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workersfilter',
})
export class WorkersfilterPipe implements PipeTransform {
  transform(
    workers: { name: string; surname: string }[],
    searchName: string,
    searchSurname: string
  ): any[] {
    if (searchName === '' && searchSurname === '') {
      return workers;
    }
    if (searchName !== '' && searchSurname === '') {
      return workers.filter(
        (worker) =>
          worker.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
      );
    }
    if (searchName === '' && searchSurname !== '') {
      return workers.filter(
        (worker) =>
          worker.surname.toLowerCase().indexOf(searchSurname.toLowerCase()) !==
          -1
      );
    }
    if (searchName !== '' && searchSurname !== '') {
      let filtredWorkers = workers.filter(
        (worker) =>
          worker.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
      );
      return filtredWorkers.filter(
        (worker) =>
          worker.surname.toLowerCase().indexOf(searchSurname.toLowerCase()) !==
          -1
      );
    }
  }
}
