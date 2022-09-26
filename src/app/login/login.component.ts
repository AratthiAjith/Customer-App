import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  upasswd: string = "";
  msg: string = "";
  //status:string="";
  //myClass:string="";
  datam:Customer[]=[];
  constructor(private service:CustomerService,private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  checkUserNameAndPassword(uname:string,passwrd:string):boolean{
    this.service.getCustomerList().subscribe(data=>{
      this.datam=data;
    })
    var count=0;
    for(var i=0;i<this.datam.length;i++){
   
     if(this.datam[i].username==uname && this.datam[i].password==passwrd){
       count++;
     }
   }
   if(count==1){
     return true;
   }else{
     return false;
   }
    
  }
  getValidation(tx1: any) {

    var b = this.checkUserNameAndPassword(this.username, this.upasswd)
    if(b) {
     // this.msg = "Successful login "+this.username +":)";
      setTimeout(() => {
       //this.tinyAlert()
       this.router.navigate(['/customer'])
      },2000)
     
    } else { 
      
      //this.msg = " login failed...!";
      //this.username="";
    //this.tinyAlert1()
      this.upasswd="";
      tx1.focus();
     
    }
}

}
