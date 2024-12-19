
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { MasterProgrammeComponent } from './master-programme/master-programme.component';
import { GridComponent } from './grid/grid.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure BrowserAnimationsModule is imported
import { MatGridListModule } from '@angular/material/grid-list';
import { RoutingComponent } from './routing/routing.component'; 
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatDialogModule} from '@angular/material/dialog';
import { DropdownComponent } from './dropdown/dropdown.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EditformComponent } from './editform/editform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgridComponent } from './progrid/progrid.component';
import { ApiService } from './api.service';
import { ChildformComponent } from './childform/childform.component';

@NgModule({
  declarations: [
    AppComponent,
    
    MasterProgrammeComponent,
          GridComponent,
          RoutingComponent,
          DropdownComponent,
          EditformComponent,
          ProgridComponent,
          ChildformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
   
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
