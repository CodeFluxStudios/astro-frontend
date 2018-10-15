import {Component, OnInit} from '@angular/core';
import {GuildOverview} from '../../value-types/guild-overview';
import {ProjectService} from '../../services/project.service';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoadingProjects: boolean;
  projects: GuildOverview[] = [];

  constructor(private projectService: ProjectService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProjectOverviews();
  }

  getProjectOverviews() {
    this.isLoadingProjects = true;
    this.projectService.getProjectOverviews().subscribe(projectOverviews => {
      this.isLoadingProjects = false;
      this.projects = projectOverviews;
    });
  }

  newProject() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      width: '400px',
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true
    });
  }
}
