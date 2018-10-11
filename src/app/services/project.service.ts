import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProjectOverview} from '../value-types/project-overview';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectBaseUrl = 'api/';

  constructor(private http: HttpClient) {
  }

  /** GET project overviews from the server */
  getProjectOverviews(): Observable<ProjectOverview[]> {
    return this.http.get<ProjectOverview[]>(this.projectBaseUrl + 'projects_overview')
      .pipe(
        tap(projects => console.log('Fetched project overviews')),
        catchError(this.handleError('getProjectOverviews', []))
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
