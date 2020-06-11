import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FarmerSearchCardComponent } from './farmer-search-card/farmer-search-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Components
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Services
import { FarmerSearchAbstractService } from './services/farmer-search-abstract/farmer-search-abstract.service';
import { FarmerSearchCommonService } from './services/farmer-search-common/farmer-search-common.service';

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [FarmerSearchCommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
