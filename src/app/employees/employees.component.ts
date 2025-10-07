import { Component } from '@angular/core';
import { employeeDetails } from '../models/employeDetails';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employeList = employeeDetails;
  filteredEmployeeList = [...employeeDetails];
  searchTerm: string = ''; 

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(searchTerm => {
      this.filterEmployee(searchTerm);
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  filterEmployee(value: string) {
    const searchTerm = value.trim().toLowerCase();
    this.filteredEmployeeList = searchTerm
      ? this.employeList.filter(emp =>
          emp.name.toLowerCase().includes(searchTerm) ||
          emp.skill.toLowerCase().includes(searchTerm)
        )
      : [...this.employeList];
  }
}