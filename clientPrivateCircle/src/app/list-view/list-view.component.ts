import { Component, OnInit } from '@angular/core';

import {AppStateManagerService} from './../services/app-state-manager.service';

import {ListDataFormat} from './../models/list-data-format';
import {MatTableDataSource} from '@angular/material';

import { faListUl, faHistory, faFilter } from '@fortawesome/free-solid-svg-icons';

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

   icons = {
    'faListUl': faListUl,
    'faHistory': faHistory,
    'faFilter': faFilter
  };

  constructor(
    private appStateManagerService: AppStateManagerService
  ) { }

  ngOnInit() {
    this.appStateManagerService.getMockData().subscribe(
      data => {
      this.listViewData = data;
      this.dataSource = new MatTableDataSource(this.listViewData);
      // setting the custom filter for list name object
      this.dataSource.filterPredicate = (row: any, filterValue: string) =>
        row.listName.toLowerCase().includes(filterValue.trim().toLowerCase());
      }
    );
  }

  // sets the tab selected to show the table data or history
  setSelectedTab(value) {
    this.selectedTab = value;
  }
  // sets the selected row in the table on clicking detail
  showDetails(element) {
    this.descriptions = element.description;
    this.listSelectedRow = element.listName;
  }
  // search filter(angular material)
  searchByListName(searchValue) {
    this.dataSource.filter = searchValue;
  }
}
