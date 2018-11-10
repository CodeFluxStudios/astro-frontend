import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandViewComponent} from './command-view.component';
import {CommandSidenavComponent} from '../command-sidenav/command-sidenav.component';
import {CommandEditorComponent} from '../command-editor/command-editor.component';
import {MatCardModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {ContextMenuComponent} from '../context-menu/context-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CommandViewComponent', () => {
  let component: CommandViewComponent;
  let fixture: ComponentFixture<CommandViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommandViewComponent,
        CommandSidenavComponent,
        CommandEditorComponent,
        ContextMenuComponent
      ],
      imports: [
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
