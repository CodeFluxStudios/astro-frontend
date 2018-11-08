import {Injectable} from '@angular/core';
import {CommandOverview} from '../value-types/command/command-overview';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public curCommand: CommandOverview;

  constructor(private http: HttpClient) {
  }

  getCommand(guildId: string, commandId: string): Observable<CommandOverview> {
    return this.http.get<CommandOverview>(`api/bot/commands/${guildId}/${commandId}`)
      .pipe(
        tap(data => console.log('GuildService - getCommand')),
        map(data => {
          const c = new CommandOverview();
          c.loadCommandOverviewData(data);
          return c;
        }),
        catchError(() => {
          return of(null);
        })
      );
  }

  getAllCommands(guildId: string): Observable<CommandOverview[]> {
    return this.http.get<CommandOverview[]>(`api/bot/commands/${guildId}`)
      .pipe(
        tap(commands => console.log('GuildService - getAccessibleGuilds')),
        map(commands => commands.map(value => {
          const command = new CommandOverview();
          command.loadCommandOverviewData(value);
          return command;
        })),
        catchError(() => {
          return of([]);
        })
      );
  }
}
