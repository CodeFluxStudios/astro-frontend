import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewGuildComponent} from './new-guild.component';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('NewGuildComponent', () => {
  let component: NewGuildComponent;
  let fixture: ComponentFixture<NewGuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewGuildComponent],
      imports: [
        MatProgressSpinnerModule,
        MatListModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
