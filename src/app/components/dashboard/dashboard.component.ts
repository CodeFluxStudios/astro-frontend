import {Component, OnInit} from '@angular/core';
import {ProjectOverview} from '../../models/project-overview';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: ProjectOverview[] = [
    new ProjectOverview('CodeFlux Studios', 'https://via.placeholder.com/150x150', '0'),
    new ProjectOverview('Global Hackers Community', 'https://via.placeholder.com/150x150', '1'),
    new ProjectOverview('Programmer`s Hangout', 'https://via.placeholder.com/150x150', '2'),
    new ProjectOverview('The Coding Den', 'https://via.placeholder.com/150x150', '3'),
    new ProjectOverview('Rocket League', 'https://via.placeholder.com/150x150', '4'),
    new ProjectOverview('algorithm-archive', 'https://via.placeholder.com/150x150', '5'),
    new ProjectOverview('Project G', 'https://via.placeholder.com/150x150', '6'),
    new ProjectOverview('Project H', 'https://via.placeholder.com/150x150', '7'),
    new ProjectOverview('Project I', 'https://via.placeholder.com/150x150', '8')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
