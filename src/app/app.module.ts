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
@NgModule({
  declarations: [
    AppComponent,
    ColorchangerDirective,
    TabsComponent,
    EmployeesComponent,
    SkillBadgePipe,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
