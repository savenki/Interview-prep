import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';
import { By } from '@angular/platform-browser';
import { employeeDetails } from '../models/employeDetails';
import { SkillBadgePipe } from '../skill-badge.pipe';
import { FormsModule } from '@angular/forms';
describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  const mockEmployees:any[] = [...employeeDetails];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesComponent, SkillBadgePipe],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    component.employeList = mockEmployees;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of employee cards', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.employee'));
    expect(cardElements.length).toBe(mockEmployees.length);
  });

  it('should display employee details with skill badge', () => {
    const skillBadgePipe = new SkillBadgePipe();
    const cardElements = fixture.debugElement.queryAll(By.css('.employee'));

    cardElements.forEach((card, index) => {
      const text = card.nativeElement.textContent;
      expect(text).toContain(mockEmployees[index].name);
      expect(text).toContain(`Age: ${mockEmployees[index].age}`);
      expect(text).toContain(
        `Skill: ${skillBadgePipe.transform(mockEmployees[index].skill)}`
      );
    });
  });
});
