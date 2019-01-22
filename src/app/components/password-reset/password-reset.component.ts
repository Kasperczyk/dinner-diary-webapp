import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dd-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  emailAddress: string;

  constructor() { }

  ngOnInit() {
  }

}
