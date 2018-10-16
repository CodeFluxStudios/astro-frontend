import {Component, OnInit} from '@angular/core';
import {GuildOverview} from '../../value-types/guild-overview';
import {ProjectService} from '../../services/project.service';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoadingProjects: boolean;
  projects: GuildOverview[] = [];

  constructor(private projectService: ProjectService,
              public dialog: MatDialog,
              private router: Router) {
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

  showProject(project: GuildOverview) {
    this.projectService.curProject = project;
    this.router.navigateByUrl(`project/${project.id}`);
  }
}
