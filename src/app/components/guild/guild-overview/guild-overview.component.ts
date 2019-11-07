import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {NewCommandComponent} from '../new-command/new-command.component';
import {ActivatedRoute, Router} from '@angular/router';
import {GuildService} from '../../../services/guild.service';
import {CommandOverview} from '../../../value-types/command/command-overview';
import {CommandService} from '../../../services/command.service';

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

  filteredCommands: Observable<CommandOverview[]>;
  allCommands: CommandOverview[] = [];

  loadingCommands: boolean;

  @ViewChild('filterInput', {static: false}) filterInput: ElementRef<HTMLInputElement>;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private guildService: GuildService,
              private commandService: CommandService) {
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

  showCommand(command: CommandOverview) {
    this.commandService.curCommand = command;
    this.router.navigateByUrl(`guild/${this.guildService.curGuild.id}/${command.id}`);
  }

  getGuild() {
    const guildId = this.route.snapshot.paramMap.get('guildId');
    console.log(guildId);
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

  getCommands() {
    this.loadingCommands = true;
    const guildId = this.route.snapshot.paramMap.get('guildId');
    this.commandService.getAllCommands(guildId).subscribe(commands => {
      this.allCommands = commands;
      this.filteredCommands = of(this.allCommands.slice());
      this.loadingCommands = false;
    });
  }

  ngOnInit() {
    this.getGuild();
    this.getCommands();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEvents.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
