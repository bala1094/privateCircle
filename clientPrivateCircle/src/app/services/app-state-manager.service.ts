import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {ListDataFormat} from './../models/list-data-format';
import {mockData} from './../mock-data';

@Injectable()
export class AppStateManagerService {

  constructor() { }

  getMockData(): Observable<ListDataFormat[]> {
    return of(mockData);
  }

  addDescription(listName, description) {
    mockData.find( element => {
      if (element.listName === listName) {
        element.description.push(description);
        return true;
      }
    });
  }
}
