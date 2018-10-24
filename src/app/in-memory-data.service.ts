import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const adminGuilds = [
      {name: 'Sample Guild A', icon: 'iconHash', id: '0'},
      {name: 'Sample Guild B', icon: 'iconHash', id: '1'},
      {name: 'Sample Guild C', icon: 'iconHash', id: '2'},
      {name: 'Sample Guild D', icon: 'iconHash', id: '3'},
      {name: 'CodeFlux Studios', icon: '8fd9254891141b735c4897c72a74127a', id: '369857813465268227'},
    ];

    return {adminGuilds};
  }

  parseRequestUrl(url: string, requestInfoUtils: RequestInfoUtilities): ParsedRequestUrl {
    let newUrl = '';

    switch (url) {
      case 'api/guilds/admin':
        newUrl = 'api/adminGuilds';
        break;
    }

    return requestInfoUtils.parseRequestUrl(newUrl);
  }
}
