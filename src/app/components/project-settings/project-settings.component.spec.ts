import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectSettingsComponent} from './project-settings.component';
import {MatCardModule, MatCheckboxModule, MatDividerModule, MatSlideToggleModule} from '@angular/material';

describe('ProjectSettingsComponent', () => {
  let component: ProjectSettingsComponent;
  let fixture: ComponentFixture<ProjectSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSettingsComponent],
      imports: [
        MatCheckboxModule,
        MatCardModule,
        MatSlideToggleModule,
        MatDividerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
