import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Main
import {ToolbarComponent} from './components/main/toolbar/toolbar.component';
import {FooterComponent} from './components/main/footer/footer.component';
import {ProgressBarComponent} from './components/main/progress-bar/progress-bar.component';
import {PageNotFoundComponent} from './components/main/page-not-found/page-not-found.component';
// Home
import {HomeComponent} from './components/home/home/home.component';
// Dashboard
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
// Guild
import {NewGuildComponent} from './components/guild/new-guild/new-guild.component';
import {GuildOverviewComponent} from './components/guild/guild-overview/guild-overview.component';
import {GuildSettingsComponent} from './components/guild/guild-settings/guild-settings.component';

// Command

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    ProgressBarComponent,
    NewGuildComponent,
    GuildOverviewComponent,
    PageNotFoundComponent,
    GuildSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDividerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NewGuildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
