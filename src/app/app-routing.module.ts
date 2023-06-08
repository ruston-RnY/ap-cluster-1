import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './pages/searching/searching.component';
import { SortingComponent } from './pages/sorting/sorting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sorting',
    pathMatch: 'full',
  },
  {
    path: 'sorting',
    component: SortingComponent,
  },
  {
    path: 'searching',
    component: SearchingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
