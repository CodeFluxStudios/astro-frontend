import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const adminGuilds = [
      {name: 'Test Guild A', icon: 'iconHash', bot_joined: 'true', id: '0'},
      {name: 'Test Guild B', icon: 'iconHash', bot_joined: 'true', id: '1'},
      {name: 'Test Guild C', icon: 'iconHash', bot_joined: 'true', id: '2'},
      {name: 'Test Guild D', icon: 'iconHash', bot_joined: 'true', id: '3'},
      {name: 'CodeFlux Studios', icon: '8fd9254891141b735c4897c72a74127a', bot_joined: 'true', id: '369857813465268227'},
    ];

    const user = {username: 'TestUser', avatar: '1234234', id: '1234234'};

    return {adminGuilds, user};
  }

  parseRequestUrl(url: string, requestInfoUtils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = '';

    if (url === 'api/user/guilds/admin') {
      newUrl = 'api/adminGuilds';
    } else if (url === 'api/user') {
      newUrl = 'api/user';
    }

    return requestInfoUtils.parseRequestUrl(newUrl);
  }
}
