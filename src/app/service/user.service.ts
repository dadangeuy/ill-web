import {Injectable} from '@angular/core';
import {User} from '../model/User';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  static dummyUsers(): User[] {
    return [this.dummyUser1(), this.dummyUser2()];
  }

  static dummyUser1(): User {
    const user = new User();
    user.name = 'Frieda';
    user.email = 'frieda@mhs.if.its.ac.id';
    user.password = 'frieda';
    user.role = ['PEMINJAM'];
    return user;
  }

  static dummyUser2(): User {
    const user = new User();
    user.name = 'Rio';
    user.email = 'rio@sdm.if.its.ac.id';
    user.password = 'rio';
    user.role = ['PUSTAKAWAN', 'PEMINJAM'];
    return user;
  }

  attemptLogin(email: string, password: string): User {
    return _.find(UserService.dummyUsers(), (user) => user.email === email && user.password === password);
  }
}
