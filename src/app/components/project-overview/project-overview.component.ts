import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  filterCtrl = new FormControl();
  filteredEvents: Observable<string[]>;
  events: string[] = [];
  allEvents: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  filteredCommands: Observable<string[]>;
  allCommands: string[] = ['join-guild', 'leave-guild', 'add-guild'];

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredCommands = of(this.allCommands.slice());

    this.filteredEvents = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((searchTerm: string | null) => searchTerm ? this._filter(searchTerm) : this.allEvents.slice())
    );

    this.filteredCommands = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((searchTerm: string | null) => searchTerm ? this.allCommands.slice() : this.allCommands.slice())
    );

    console.log(this.filteredCommands);
  }

  remove(fruit: string): void {
    const index = this.events.indexOf(fruit);

    if (index >= 0) {
      this.events.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.events.push(event.option.viewValue);
    this.filterInput.nativeElement.value = '';
    this.filterCtrl.setValue(null);
  }

  clearTextFilter() {
    this.filterInput.nativeElement.value = '';
    this.filterCtrl.setValue(null);
  }

  newCommand() {
    // TODO: New command
  }

  showCommand(command: string) {

  }

  ngOnInit() {
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEvents.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
