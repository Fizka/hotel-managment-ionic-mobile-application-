import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../servis/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: Customer = new Customer();
  password: string;
  submitted = false;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.customerService.createCustomer(this.user).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
    this.user = new Customer();
  }

  onSubmit() {
    if (this.user.password === this.password) {
      this.save();
    } else {
      alert('Hasla sie nie zgadzają!');
    }
  }
}
