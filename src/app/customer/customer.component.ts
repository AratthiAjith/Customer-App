import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ngOnInit(): void {
  }

  search:string="";
  //dam:Customer[].hair=[];
  cus:Customer[]=[];
  cus1:Customer[]=[];
  constructor(private service:CustomerService,private router:Router,private activerouter:ActivatedRoute){
 this.service.getCustomerList().subscribe(response =>{
   this.cus=response;
   this.cus1=this.cus;
   //this.dam[]=this.cus1[].hair;
 });
  }
OnClickSearch(){
  this.cus1=this.cus.filter((c)=>{return c.id.toPrecision().indexOf(this.search)>=0;
  
});
}
}
