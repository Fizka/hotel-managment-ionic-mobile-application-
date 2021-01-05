import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../servis/customer.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Customer;
  loginPodany: string;
  passwordPodane: string;

  constructor(private router: Router, private customerService: CustomerService, private appMod: AppComponent) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginPodany) {
      this.findWorker(this.loginPodany);
    }
  }

  private findWorker(login) {

    this.customerService.getCustomerbylogin(login).subscribe(
      data => {
        this.user = data as Customer;
        console.log(data);
        if (this.loguj(this.passwordPodane)) {
          sessionStorage.setItem('login', JSON.stringify(this.user));
          sessionStorage.setItem('zalogowany', JSON.stringify(true));
          this.appMod.changePage();
          this.router.navigate(['/room']);
        } else {
          alert('Blad logowania');
        }
      },
      error => console.log(error));

  }

  loguj(password) {
    console.log(this.user.password);
    if (this.user !== undefined) {
      if (password === this.user.password) {
        return true;
      } else {
        return false;
      }
    }

  }

  logOut() {
    sessionStorage.clear();
  }

  logIn() {
    this.router.navigate(['/room']);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
