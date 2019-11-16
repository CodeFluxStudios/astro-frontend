import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss', './context-menu.component.theme.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent implements AfterViewInit {
  @ViewChild('contextMenu', {static: false}) contextMenu: ElementRef;
  isCreateNodeContext = false;
  lastMousePos = {x: 0, y: 0};
  nodeSearchTerm: String;

  nodes = [
    'Node A',
    'Node B',
    'Node C',
    'Node D',
    'Node E',
    'Node F'
  ];

  constructor() {
    this.addContextMenu();
  }

  ngAfterViewInit(): void {
    this.contextMenu.nativeElement.addEventListener('click', (e: MouseEvent) => {
      console.log('contextMenu click');

      e.preventDefault();
      e.stopPropagation();
    });
  }

  addContextMenu() {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();

      console.log('document contextmenu event click');

      // @ts-ignore
      if (e.target.id === 'canvas') {
        this.toggleCustomContextMenu(e, true);
      } else {
        this.toggleCustomContextMenu(e, false);
      }
    }, false);

    document.addEventListener('click', (e) => {
      console.log('document click');

      this.toggleCustomContextMenu(e, false);
    });
  }

  showCreateNodeContext() {
    this.isCreateNodeContext = true;

    if (!this.contextMenu.nativeElement.classList.contains('create-node-context')) {
      this.contextMenu.nativeElement.classList.add('create-node-context');
    }

    this.moveContextMenu(null, 225, 250);
  }

  toggleCustomContextMenu(e, on: boolean) {
    this.isCreateNodeContext = false;
    if (this.contextMenu.nativeElement.classList.contains('create-node-context')) {
      this.contextMenu.nativeElement.classList.remove('create-node-context');
    }

    if (on) {
      if (!this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.add('open');
      }

      this.lastMousePos = {x: e.pageX, y: e.pageY};

      this.moveContextMenu(e, 150, 108);
    } else {
      if (this.contextMenu.nativeElement.classList.contains('open')) {
        this.contextMenu.nativeElement.classList.remove('open');
      }
    }
  }

  moveContextMenu(e: MouseEvent, width: number, height: number) {
    const origin = e !== null ? this.getContextOrigin(e.pageX, e.pageY - 64, width, height) :
      this.getContextOrigin(this.lastMousePos.x, this.lastMousePos.y - 64, width, height);
    this.contextMenu.nativeElement.style.left = `${origin.x}px`;
    this.contextMenu.nativeElement.style.top = `${origin.y}px`;
  }

  getContextOrigin(leftOffset, topOffset, width: number, height: number) {
    if (leftOffset + width > window.innerWidth) {
      leftOffset -= width;
    }

    if (topOffset + height > window.innerHeight - 112) {
      topOffset -= height;
    }
    return {x: leftOffset, y: topOffset};
  }
}
