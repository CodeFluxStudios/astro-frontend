import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {MatCardModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        MatIconModule,
        MatProgressSpinnerModule,
        MatCardModule,
        HttpClientModule,
        MatDialogModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
