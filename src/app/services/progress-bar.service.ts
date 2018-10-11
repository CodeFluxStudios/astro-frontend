import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public isLoading: boolean = true;
  public value: number = 60;

  constructor() {
  }
}
