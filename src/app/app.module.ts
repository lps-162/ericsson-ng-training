import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppComponent } from './app.component';
import { EmpListComponent } from './erp/employees/emp-list/emp-list.component';
import { EmpDetailsComponent } from './erp/employees/emp-details/emp-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatToolbarModule, 
         MatCardModule, 
         MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { TableModule } from 'primeng/table';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EmpCreateComponent } from './erp/employees/emp-create/emp-create.component';
import { appRouting } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
    EmpCreateComponent,

    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    TableModule,
    FlexLayoutModule,

    MatCardModule,
    MatInputModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
