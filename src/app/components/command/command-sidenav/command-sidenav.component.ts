import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-command-sidenav',
  templateUrl: './command-sidenav.component.html',
  styleUrls: ['./command-sidenav.component.scss']
})
export class CommandSidenavComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatDrawer;
  @ViewChild('toggleBtn', {static: false, read: ElementRef}) toggleBtn: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();

    let rotation = '';

    if (this.toggleBtn.nativeElement.classList.contains('rotated')) {
      rotation = 'rotate(360deg)';
      this.toggleBtn.nativeElement.classList.remove('rotated');
    } else {
      rotation = 'rotate(180deg)';
      this.toggleBtn.nativeElement.classList.add('rotated');
    }

    this.renderer.setStyle(this.toggleBtn.nativeElement, 'transform', rotation);
  }
}
