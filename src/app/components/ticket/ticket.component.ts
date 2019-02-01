import {Component} from '@angular/core';

@Component({
  selector: 'dd-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  showSuccessAlert = false;
  ticketType = 'bugReport';

  constructor() { }

  hideSuccessAlert() {
    this.showSuccessAlert = false;
  }
}
