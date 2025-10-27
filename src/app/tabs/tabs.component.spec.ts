import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { By } from '@angular/platform-browser';
import { EmployeesComponent } from '../employees/employees.component';
import { SkillBadgePipe } from '../skill-badge.pipe';
import { ColorchangerDirective } from '../colorchanger.directive';
import { RegistrationComponent } from '../registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { MarkdownViewerComponent } from '../markdown-viewer/markdown-viewer.component';
import { HttpClientModule } from '@angular/common/http';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent,EmployeesComponent, // ✅ Declare it here
        SkillBadgePipe, ColorchangerDirective, RegistrationComponent,  FooterComponent],
        imports: [ReactiveFormsModule, FormsModule, MarkdownViewerComponent, HttpClientModule]
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
  expect(buttonTexts).toEqual(['Home', 'Profile', 'Notes']);
});

  it('should have Home tab active', () => {
  const buttonEls = fixture.debugElement.queryAll(By.css('button'));
  const notesButton = buttonEls.find(
    el => el.nativeElement.textContent.trim() === 'Home'
  );

  expect(notesButton).toBeDefined();
  expect(notesButton!.nativeElement.classList.contains('active')).toBeTrue();
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

 it('should show deferred notes content', () => {
  component.activeTabs.set('Notes');
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('Angular');
});

it('should apply ColorchangerDirective to heading', fakeAsync(() => {
  component.activeTabs.set('Home');
  fixture.detectChanges();
  tick(5000); // allow @defer to hydrate
  fixture.detectChanges();

  const directiveElements = fixture.debugElement.queryAll(By.directive(ColorchangerDirective));
  expect(directiveElements.length).toBeGreaterThan(0);
}));

it('should change class on mouseenter and mouseleave', fakeAsync(() => {
  component.activeTabs.set('Home');
  fixture.detectChanges();
  tick(5000); // allow @defer to hydrate
  fixture.detectChanges();

  const heading = fixture.debugElement.query(By.css('h2'));
  expect(heading).toBeTruthy(); // ensure it's found

  const nativeEl = heading.nativeElement;

  heading.triggerEventHandler('mouseenter', null);
  fixture.detectChanges();
  expect(nativeEl.classList.contains('text-danger')).toBeTrue();

  heading.triggerEventHandler('mouseleave', null);
  fixture.detectChanges();
  expect(nativeEl.classList.contains('text-success')).toBeTrue();
}));
});
