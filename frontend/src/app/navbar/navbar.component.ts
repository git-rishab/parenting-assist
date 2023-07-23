import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

interface User {
  name: string;
  email: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: User | null = null;
  private readonly notifier: NotifierService;
  constructor(private router: Router, notifierService: NotifierService) { this.notifier = notifierService; }
  ngOnInit(): void {
    const userData = sessionStorage.getItem('data');
    if (userData) {
      this.user = JSON.parse(userData) as User;
    }
  }
  logout(){
    sessionStorage.clear();
    this.notifier.notify('error', 'Logout Successfull');
    this.redirect('');
  }
  redirect(endpoint:string) {
    this.router.navigateByUrl(endpoint);
  }
}
