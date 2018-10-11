import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from '../../services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) {
  }

  ngOnInit() {
  }

}
