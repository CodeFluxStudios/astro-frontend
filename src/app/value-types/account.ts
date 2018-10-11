export class Account {
  public username: string;
  public avatarUrl: string;
  public id: number;

  constructor(username: string, avatarUrl: string, id: number) {
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.id = id;
  }
}
