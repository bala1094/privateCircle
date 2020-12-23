import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom imports
import {ListViewComponent} from './list-view/list-view.component';

const routes: Routes = [
  {
    path: 'listView',
    component: ListViewComponent
  },
  // default path
  {
    path: '',
    redirectTo: '/listView',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
