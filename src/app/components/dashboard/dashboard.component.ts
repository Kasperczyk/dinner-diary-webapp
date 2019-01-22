import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user';

@Component({
  selector: 'dd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const id = (JSON.parse(localStorage.getItem('currentUser')) as User).id;
    this.authenticationService.emitSuccessfulLoginEvent(id);
  }

}
