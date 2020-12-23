import { Component, OnInit } from '@angular/core';

import {AppStateManagerService} from './../services/app-state-manager.service';

import {ListDataFormat} from './../models/list-data-format';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  listViewData: ListDataFormat[];
  displayedColumns = ['date', 'listName', 'numOfEntities', 'actions', 'details'];
  dataSource: any;
  descriptions: Array<string>;
  listSelectedRow: string;
  selectedTab: string;

  constructor(
    private appStateManagerService: AppStateManagerService
  ) { }

  ngOnInit() {
    this.appStateManagerService.getMockData().subscribe(
      data => {
      this.listViewData = data;
      this.dataSource = new MatTableDataSource(this.listViewData);
      // setting the custom filter for list name row
      this.dataSource.filterPredicate = (row: any, filterValue: string) =>
        row.listName.toLowerCase().includes(filterValue.trim().toLowerCase());
    }
    );
  }

  showDetails(element) {
    this.descriptions = element.description;
    this.listSelectedRow = element.listName;
    console.log( this.descriptions);
  }

  searchByListName(searchValue) {
    console.log(searchValue);
    this.dataSource.filter = searchValue;
  }

  setSelectedTab(value) {
    this.selectedTab = value;
    console.log(this.selectedTab);
  }
}
