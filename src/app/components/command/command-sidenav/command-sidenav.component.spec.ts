import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandSidenavComponent} from './command-sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CommandSidenavComponent', () => {
  let component: CommandSidenavComponent;
  let fixture: ComponentFixture<CommandSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandSidenavComponent],
      imports: [
        MatSidenavModule,
        MatIconModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
