export class Account {
  public username: string;
  public avatarUrl: string;
  public id: number;

  constructor() {
  }

  loadAccountData(data) {
    this.username = data['username'];
    this.avatarUrl = data['avatar'];
    this.id = data['id'];
    this.avatarUrl = `https://cdn.discordapp.com/avatars/${this.id}/${data['avatar']}.png`;
  }
}
