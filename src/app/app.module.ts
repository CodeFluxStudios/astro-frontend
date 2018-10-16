import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';

import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {ProjectOverviewComponent} from './components/project-overview/project-overview.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    ProgressBarComponent,
    NewProjectComponent,
    ProjectOverviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // TODO: Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 1000}
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NewProjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
