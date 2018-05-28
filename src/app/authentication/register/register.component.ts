import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  attemptRegister(name: string, email: string, password: string) {
    alert('Pendaftaran Berhasil');
    window.location.href = '/';
  }
}
