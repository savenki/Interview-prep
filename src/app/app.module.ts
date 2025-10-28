import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorchangerDirective } from './colorchanger.directive';
import { TabsComponent } from './tabs/tabs.component';
import { EmployeesComponent } from './employees/employees.component';
import { SkillBadgePipe } from './skill-badge.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MarkdownViewerComponent } from "./markdown-viewer/markdown-viewer.component";
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import { UploadComponent } from './upload/upload.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorchangerDirective,
    TabsComponent,
    EmployeesComponent,
    SkillBadgePipe,
    RegistrationComponent,
    FooterComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MarkdownViewerComponent,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
