import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCommandComponent} from './new-command.component';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('NewCommandComponent', () => {
  let component: NewCommandComponent;
  let fixture: ComponentFixture<NewCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCommandComponent],
      imports: [
        MatProgressSpinnerModule,
        MatListModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
