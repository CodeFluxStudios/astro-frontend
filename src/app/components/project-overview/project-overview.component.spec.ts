import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectOverviewComponent} from './project-overview.component';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectSettingsComponent} from '../project-settings/project-settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ProjectOverviewComponent', () => {
  let component: ProjectOverviewComponent;
  let fixture: ComponentFixture<ProjectOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectOverviewComponent,
        ProjectSettingsComponent
      ],
      imports: [
        MatChipsModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDividerModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
