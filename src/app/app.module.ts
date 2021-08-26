import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//RUTAS
import { app_routing } from "./app.routes";       

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


//COMPONENTS

import { CatalogComponent,DialogOverviewExampleDialog } from './components/catalog/catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


//SERVICES
//import {InformacionService} from './services/informacion.service';
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';


//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';


import { HttpClientModule } from '@angular/common/http';
//import { LightboxModule } from 'ngx-lightbox';
import { Component, Inject} from '@angular/core';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { TestcomponentComponent } from './components/testcomponent/testcomponent.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuestionComponent } from './components/question/question.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThankComponent } from './components/thank/thank.component';
import { CourseComponent } from './components/course/course.component';
import { SinglecourseComponent } from './components/singlecourse/singlecourse.component';




@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    DialogOverviewExampleDialog,
    TopheaderComponent,
    SliderHomeComponent,
    PreFooterComponent,
    TestcomponentComponent,
    BlogComponent,
    QuestionComponent,
    ContactComponent,
    ThankComponent,
    CourseComponent,
    SinglecourseComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[ DialogOverviewExampleDialog ],
  providers: [
    TixsService
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
