import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.loadAccount().subscribe();
  }

}
