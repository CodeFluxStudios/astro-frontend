import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GuildOverview} from '../value-types/guild-overview';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public curProject: GuildOverview;
  private projectBaseUrl = 'api/';

  constructor(private http: HttpClient) {
  }

  /** GET project overviews from the server */
  getProjectOverviews(): Observable<GuildOverview[]> {
    return this.http.get<GuildOverview[]>(this.projectBaseUrl + 'projects_overview')
      .pipe(
        tap(projects => console.log('Fetched project overviews')),
        catchError(this.handleError('getProjectOverviews', []))
      );
  }


  /** GET project overviews from the server */
  getProjectOverviewsOther(): Observable<GuildOverview[]> {
    return this.http.get<GuildOverview[]>(this.projectBaseUrl + 'projects_overview_other')
      .pipe(
        tap(projects => console.log('Fetched project overviews other')),
        catchError(this.handleError('getProjectOverviewsOther', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      return of(result as T);
    };
  }
}
