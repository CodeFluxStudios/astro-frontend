import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss', './context-menu.component.theme.scss']
})
export class ContextMenuComponent implements OnInit {
  @ViewChild('contextMenu') contextMenu;

  constructor() {
    this.addContextMenu();
  }

  ngOnInit() {
  }

  addContextMenu() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      if (e.srcElement.id === 'canvas') {
        this.toggleCustomContextMenu(e, true);
      } else {
        this.toggleCustomContextMenu(e, false);
      }
    }, false);

    document.addEventListener('click', (e) => {
      this.toggleCustomContextMenu(e, false);
    });
  }

  toggleCustomContextMenu(e, on: boolean) {
    if (on) {
      if (!this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.add('open');
      }

      const origin = this.getContextOrigin(e.pageX, e.pageY - 64);
      this.contextMenu.nativeElement.style.left = `${origin.x}px`;
      this.contextMenu.nativeElement.style.top = `${origin.y}px`;
    } else {
      if (this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.remove('open');
      }
    }
  }

  getContextOrigin(leftOffset, topOffset) {
    if (leftOffset + 150 > window.innerWidth) {
      leftOffset -= 150;
    }

    if (topOffset + 108 > window.innerHeight - 112) {
      topOffset -= 108;
    }
    return {x: leftOffset, y: topOffset};
  }
}
