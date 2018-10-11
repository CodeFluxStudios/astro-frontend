import {Component, OnInit} from '@angular/core';
import {ProjectOverview} from '../../models/project-overview';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoadingProjects: boolean;
  projects: ProjectOverview[] = [];

  constructor(private projectService: ProjectService) {
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
}
