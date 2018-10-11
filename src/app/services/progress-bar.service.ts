import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public isLoading: boolean;
  public value: number;

  constructor() {
  }
}
