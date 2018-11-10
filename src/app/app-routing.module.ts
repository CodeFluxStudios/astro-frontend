import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
import {GuildOverviewComponent} from './components/guild/guild-overview/guild-overview.component';
import {PageNotFoundComponent} from './components/main/page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';
import {CommandViewComponent} from './components/command/command-view/command-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'guild/:guildId', component: GuildOverviewComponent, canActivate: [AuthGuard]},
  {path: 'guild/:guildId/:commandId', component: CommandViewComponent, canActivate: [AuthGuard]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
