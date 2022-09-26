import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient){ }
  url="/assets/customer.json";
 getCustomerList(){
return this.http.get <Customer[]>(this.url);
   
  }

}
