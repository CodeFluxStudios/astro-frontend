import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {NewCommandComponent} from '../new-command/new-command.component';
import {ActivatedRoute} from '@angular/router';
import {GuildService} from '../../../services/guild.service';

@Component({
  selector: 'app-guild-overview',
  templateUrl: './guild-overview.component.html',
  styleUrls: ['./guild-overview.component.scss']
})
export class GuildOverviewComponent implements OnInit {
  filterCtrl = new FormControl();
  filteredEvents: Observable<string[]>;
  events: string[] = [];
  allEvents: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  filteredCommands: Observable<string[]>;
  allCommands: string[] = ['join-guild', 'leave-guild', 'add-guild'];

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private guildService: GuildService) {
    this.filteredCommands = of(this.allCommands.slice());

    this.filteredEvents = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((searchTerm: string | null) => searchTerm ? this._filter(searchTerm) : this.allEvents.slice())
    );

    this.filteredCommands = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((searchTerm: string | null) => searchTerm ? this.allCommands.slice() : this.allCommands.slice())
    );
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
    const dialogRef = this.dialog.open(NewCommandComponent, {
      width: '400px',
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true
    });
  }

  showCommand(command: string) {

  }

  getGuild() {
    const guildId = this.route.snapshot.paramMap.get('id');
    this.guildService.getBotGuild(guildId).subscribe(guild => {
      if (guild !== null) {
        console.log(guild);
        this.guildService.curGuild = guild;
      } else {
        console.log('NO GUILD FOUND OR NO ACCESS');
        console.log(guild);
      }
    });
  }

  ngOnInit() {
    this.getGuild();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEvents.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
