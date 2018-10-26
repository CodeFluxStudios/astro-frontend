import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ProgressBarComponent} from './components/main/progress-bar/progress-bar.component';
import {ToolbarComponent} from './components/main/toolbar/toolbar.component';
import {FooterComponent} from './components/main/footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProgressBarComponent,
        ToolbarComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        MatSnackBarModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
