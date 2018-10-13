import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public isLoading = false;
  public value = 0;

  constructor() {
  }
}
