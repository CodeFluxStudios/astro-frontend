import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GuildOverview} from '../value-types/guild/guild-overview';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessagingService} from './messaging.service';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  public curGuild: GuildOverview;

  constructor(private http: HttpClient,
              private messagingService: MessagingService) {
  }

  /**
   * GET
   * Get all guilds the user has admin access.
   * @return guilds - An Observable of an array containing GuildOverview objects
   */
  getAccessibleGuilds(): Observable<GuildOverview[]> {
    return this.http.get<GuildOverview[]>('api/user/guilds/admin')
      .pipe(
        tap(guilds => console.log('GuildService - getAccessibleGuilds')),
        map(guilds => guilds.map(value => {
          const guild = new GuildOverview();
          guild.loadGuildOverviewData(value);
          return guild;
        })),
        catchError(this.handleError('getAccessibleGuilds', []))
      );
  }


  getBotGuild(guildId: string): Observable<GuildOverview> {
    return this.http.get<GuildOverview>(`api/bot/guilds/${guildId}`)
      .pipe(
        tap(data => console.log('GuildService - getBotGuild')),
        map(data => {
          const g = new GuildOverview();
          g.loadGuildOverviewData(data);
          return g;
        }),
        catchError(() => {
          return of(null);
        })
      );
  }

  /**
   * Opens a new window to add the bot to a guild.
   * @param guildId - The guild's ID the user wants to add the bot
   */
  addBotToGuild(guildId: string): void {
    console.log('GuildService - addBotToGuild');
    const guildAuthWindow = window.open(`http://lvh.me:5000/api/bot/guilds/oauth/${guildId}`, '_blank', 'height=720,width=500');
    guildAuthWindow.focus();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.messagingService.emitMessage({key: 'error', data: error});

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T);
    };
  }
}
