import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandEditorComponent} from './command-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule} from '@angular/material';
import {ContextMenuComponent} from '../context-menu/context-menu.component';

describe('CommandEditorComponent', () => {
  let component: CommandEditorComponent;
  let fixture: ComponentFixture<CommandEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommandEditorComponent,
        ContextMenuComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatCardModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
