import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService) {
  }

  ngOnInit() {
  }

  attemptLogin(email: string, password: string) {
    const user = this.service.attemptLogin(email, password);
    if (user) {
      if (user.role.includes('PUSTAKAWAN')) {
        window.location.href = '/pustakawan';
      } else {
        window.location.href = '/peminjam';
      }
    } else {
      alert('Email atau Password Salah');
    }
  }
}
