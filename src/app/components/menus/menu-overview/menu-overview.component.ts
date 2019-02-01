import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {MenuService} from '../../../services/menu.service';
import {Menu} from '../../../models/menu';
import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'dd-menu-overview',
  templateUrl: './menu-overview.component.html',
  styleUrls: ['./menu-overview.component.css']
})
export class MenuOverviewComponent implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;
  menus: Menu[];
  menu: Menu;
  isNewMenuWizardOpen = false;
  partner: string;
  guest: string;

  constructor(private authenticationService: AuthenticationService,
              private menuService: MenuService) { }

  ngOnInit() {
    this.authenticationService.emitLoadAccountEvent();
    this.menus = new Array(0);
    this.menu = <Menu>{};
    this.menu.partners = new Array(0);
    this.menu.guests = new Array(0);
  }

  addPartner() {
    this.menu.partners.push(this.partner);
    this.partner = null;
  }

  removePartner(partner: string) {
    const index = this.menu.partners.indexOf(partner);
    this.menu.partners.splice(index, 1);
  }

  addGuest() {
    this.menu.guests.push(this.guest);
    this.guest = null;
  }

  removeGuest(guest: string) {
    const index = this.menu.guests.indexOf(guest);
    this.menu.guests.splice(index, 1);
  }

  closeNewMenuWizard() {
    // todo clear datepicker
    this.menu.description = null;
    this.partner = null;
    this.menu.partners.splice(0, this.menu.partners.length);
    this.guest = null;
    this.menu.guests.splice(0, this.menu.guests.length);
    this.wizard.pageCollection.reset();
  }

  openInvitationDialog() {
    console.log('TODO');
  }

  shareMenu() {
    console.log('TODO');
  }

  saveMenu() {
    console.log('TODO');
  }
}
