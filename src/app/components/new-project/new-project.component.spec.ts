import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewProjectComponent} from './new-project.component';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProjectComponent],
      imports: [
        MatProgressSpinnerModule,
        MatListModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
