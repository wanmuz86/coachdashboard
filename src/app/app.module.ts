import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpService} from  './http.service'
import {HttpModule} from '@angular/http';
import { CoachListComponent } from './coach-list/coach-list.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component'
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoachListComponent,
    CoachDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'coaches',
    component: CoachListComponent
  },
  {
    path: 'coach-detail',
    component: CoachDetailComponent
  }
])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
