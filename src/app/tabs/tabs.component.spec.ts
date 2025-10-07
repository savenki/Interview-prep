import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { By } from '@angular/platform-browser';
import { EmployeesComponent } from '../employees/employees.component';
import { SkillBadgePipe } from '../skill-badge.pipe';
import { ColorchangerDirective } from '../colorchanger.directive';
import { RegistrationComponent } from '../registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent,EmployeesComponent, // ✅ Declare it here
        SkillBadgePipe, ColorchangerDirective, RegistrationComponent ],
        imports: [ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should have 3 tab buttons with correct names', () => {
  const tabButtonEls = fixture.debugElement.queryAll(By.css('.tabs button'));
  expect(tabButtonEls.length).toBe(3);

  const buttonTexts = tabButtonEls.map(el => el.nativeElement.textContent.trim());
  expect(buttonTexts).toEqual(['Home', 'Profile', 'Settings']);
});

  it('should have Home tab active', () => {
  const buttonEls = fixture.debugElement.queryAll(By.css('button'));
  const homeButton = buttonEls.find(
    el => el.nativeElement.textContent.trim() === 'Home'
  );

  expect(homeButton).toBeDefined();
  expect(homeButton!.nativeElement.classList.contains('active')).toBeTrue();
});

  it('should have profile content when active tab is profile', () => {
  const buttonEls = fixture.debugElement.queryAll(By.css('button'));
  const profileButton = buttonEls.find(el => el.nativeElement.textContent.trim() === 'Profile');

  expect(profileButton).toBeDefined(); // Ensure the button exists

  profileButton?.nativeElement.click(); // Safe click with optional chaining
  fixture.detectChanges();
  expect(profileButton!.nativeElement.classList.contains('active')).toBeTrue();
  // const content = fixture.nativeElement.textContent;
  // expect(content).toContain('This is Profile Content'); // or whatever text appears in profile tab
});

 it('should have settings content when active tab is settings', () => {
  const buttonEls = fixture.debugElement.queryAll(By.css('button'));
  const settingsButton = buttonEls.find(el => el.nativeElement.textContent.trim() === 'Settings');

  expect(settingsButton).toBeDefined(); // Ensure the button exists

  settingsButton?.nativeElement.click(); // Safe click with optional chaining
  fixture.detectChanges();
  expect(settingsButton!.nativeElement.classList.contains('active')).toBeTrue();
  const content = fixture.nativeElement.textContent;
  expect(content).toContain('This is Setting Content'); // or whatever text appears in profile tab
});
it('should apply ColorchangerDirective to paragraph', () => {
    const directiveElements = fixture.debugElement.queryAll(By.directive(ColorchangerDirective));
    expect(directiveElements.length).toBeGreaterThan(0);
  });

  it('should change color on mouseenter and mouseleave', () => {
  const heading1 = fixture.debugElement.query(By.css('h2'));
  const nativeEl = heading1.nativeElement;

  heading1.triggerEventHandler('mouseenter', null);
  expect(nativeEl.className).toContain('text-danger');

  heading1.triggerEventHandler('mouseleave', null);
  expect(nativeEl.className).toContain('text-dark')
});
});
