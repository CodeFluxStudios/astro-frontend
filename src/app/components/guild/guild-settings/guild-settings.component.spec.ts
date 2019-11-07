import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GuildSettingsComponent} from './guild-settings.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('GuildSettingsComponent', () => {
  let component: GuildSettingsComponent;
  let fixture: ComponentFixture<GuildSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuildSettingsComponent],
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
    fixture = TestBed.createComponent(GuildSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
