import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()

export class UsernameService {
  usernames = [
    'luke',
    'leia',
    'han'
  ];

  usernameAvailable(username: string) {
    // A real HTTP request will use the HTTPClientService, https://angular.io/guide/http for more details
    // fake async task as if we made a http request to check the server if username has been taken
    const match = this.usernames.find(n => n === username);
    return of(match === undefined).pipe(delay(1000));
  }
}
