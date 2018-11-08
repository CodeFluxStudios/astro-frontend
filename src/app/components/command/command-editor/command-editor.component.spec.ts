import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandEditorComponent} from './command-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('CommandEditorComponent', () => {
  let component: CommandEditorComponent;
  let fixture: ComponentFixture<CommandEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandEditorComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
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
