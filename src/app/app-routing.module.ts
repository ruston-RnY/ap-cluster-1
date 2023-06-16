import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from './pages/sorting/sorting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: SortingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
