import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './pages/sorting/sorting.component';
import { SearchingComponent } from './pages/searching/searching.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SortingComponent, SearchingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
