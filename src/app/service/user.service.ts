import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  about: string;
}

const fakeData: User = {
  id: 0,
  firstName: 'Dome',
  lastName: 'LT',
  about: 'Web Developer'
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  loadUser() {
    // A real HTTP request will use the HTTPClientService, https://angular.io/guide/http for more details
    // Here we use RxJS to simulate an async response
    return of<User>(fakeData).pipe( // * ==> return {}
      delay(2000)
    );
  }
}
