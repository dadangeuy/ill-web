import {Injectable} from '@angular/core';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  static dummyUsers(): User[] {
    return [this.dummyUser1()];
  }

  static dummyUser1(): User {
    const user = new User();
    user.name = 'Frieda';
    user.nrp = '5115100071';
    user.password = 'frieda';
    user.role = ['PEMINJAM'];
    return user;
  }
}
