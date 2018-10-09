import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import {ThemeTestComponent} from './components/theme-test/theme-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeTestComponent // TODO: DELETE FOR PRODUCTION
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatButtonToggleModule, MatDialogModule, MatSnackBarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
