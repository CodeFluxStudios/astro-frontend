import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeTestComponent} from './theme-test.component';
import {
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

describe('ThemeTestComponent', () => {
  let component: ThemeTestComponent;
  let fixture: ComponentFixture<ThemeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeTestComponent],
      imports: [MatToolbarModule, MatCardModule, MatIconModule, MatButtonToggleModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
