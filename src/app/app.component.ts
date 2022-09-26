import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer-App';
  
  constructor() { }

  ngOnInit(): void {
  }

}
