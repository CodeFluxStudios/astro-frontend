export class ProjectOverview {
  public name: string;
  public iconURL: string;
  public projectId: string;

  constructor(name: string, iconURL: string, projectId: string) {
    this.name = name;
    this.iconURL = iconURL;
    this.projectId = projectId;
  }
}
