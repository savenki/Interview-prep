import { Component, signal, computed } from '@angular/core';
import { employeeDetails } from '../models/employeDetails';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employeList = employeeDetails;
  searchTerm = signal('');

  filteredEmployeeList = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return term
      ? this.employeList.filter(emp =>
          emp.name.toLowerCase().includes(term) ||
          emp.skill.toLowerCase().includes(term)
        )
      : [...this.employeList];
  });

  onSearchChange(event: any) {
    this.searchTerm.set(event.target.value);
  }
}