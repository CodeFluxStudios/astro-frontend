import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const guilds = [
      {name: 'Test Guild A', icon: 'iconHash', bot_joined: 'true', id: '0'},
      {name: 'Test Guild B', icon: 'iconHash', bot_joined: 'true', id: '1'},
      {name: 'Test Guild C', icon: 'iconHash', bot_joined: 'true', id: '2'},
      {name: 'Test Guild D', icon: 'iconHash', bot_joined: 'true', id: '3'},
      {name: 'CodeFlux Studios', icon: '8fd9254891141b735c4897c72a74127a', bot_joined: 'true', id: '369857813465268227'},
    ];

    const commands = [
      {name: 'GreetUser', id: '0'},
      {name: 'KickUser', id: '1'},
      {name: 'Help', id: '2'},
      {name: 'CreatePoll', id: '3'},
      {name: 'GetGif', id: '4'},
      {name: 'GetUserStats', id: '5'}
    ];

    const user = {username: 'TestUser', avatar: '1234234', id: '1234234'};

    return {guilds, user, commands};
  }

  parseRequestUrl(url: string, requestInfoUtils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = '';

    if (url.includes('api/bot/guilds/')) {
      newUrl = url.replace('api/bot/guilds/', 'api/guilds/');
    } else if (url.includes('api/bot/commands/')) {
      const children = url.split('/');
      if (children.length === 5) {
        newUrl = 'api/commands/' + children[children.length - 1];
      } else if (children.length === 4) {
        newUrl = 'api/commands';
      } else {
        console.log(children);
      }
    } else if (url === 'api/user/guilds/admin') {
      newUrl = 'api/guilds';
    } else if (url === 'api/user') {
      newUrl = 'api/user';
    }

    return requestInfoUtils.parseRequestUrl(newUrl);
  }
}
