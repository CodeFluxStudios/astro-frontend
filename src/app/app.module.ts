import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

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
import {NewCommandComponent} from './components/guild/new-command/new-command.component';
import {GuildOverviewComponent} from './components/guild/guild-overview/guild-overview.component';
import {GuildSettingsComponent} from './components/guild/guild-settings/guild-settings.component';
// CommandDetails
import {CommandEditorComponent} from './components/command/command-editor/command-editor.component';
import {ContextMenuComponent} from './components/command/context-menu/context-menu.component';
import {CommandViewComponent} from './components/command/command-view/command-view.component';
import {CommandSidenavComponent} from './components/command/command-sidenav/command-sidenav.component';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    ProgressBarComponent,
    NewCommandComponent,
    GuildOverviewComponent,
    PageNotFoundComponent,
    GuildSettingsComponent,
    CommandEditorComponent,
    ContextMenuComponent,
    CommandViewComponent,
    CommandSidenavComponent
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
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NewCommandComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
