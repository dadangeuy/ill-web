import {Injectable} from '@angular/core';
import {User} from '../model/User';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  private static dummyUsers(): User[] {
    return [this.dummyUser1()];
  }

  private static dummyUser1(): User {
    const user = new User();
    user.name = 'Frieda';
    user.nrp = '5115100071';
    user.password = 'frieda';
    user.role = ['PEMINJAM'];
    return user;
  }

  getUser(nrp: string): User {
    return _.find(UserService.dummyUsers(), (user) => user.nrp === nrp);
  }
}
