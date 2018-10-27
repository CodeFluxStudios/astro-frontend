import {Component} from '@angular/core';
import {MatIconRegistry, MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MessagingService} from './services/messaging.service';
import {fadeAnimation} from './theme/animations/fade-animation';
import {WindowEventListenerService} from './services/window-event-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private messagingService: MessagingService,
              private windowEventListener: WindowEventListenerService,
              private snackBar: MatSnackBar) {
    this.matIconRegistry.addSvgIcon(
      'discord',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/discord-logo.svg')
    );

    this.messagingService.messageEmitted$.subscribe(data => this.displayMessage(data));
  }

  displayMessage(data) {
    // TODO: Change message style
    switch (data.key) {
      case 'error':
        this.snackBar.open('Oops! There was an error.', 'Dismiss');
        break;
      default:
        this.snackBar.open('Hey! You received a message!', null, {
          duration: 4000
        });
        break;
    }
  }
}
