export interface Customer {
    id:number;
    firstName:string;
    lastName:string;
    maidenName:string;
    age:number;
    gender:string;
    email:string;
    phone:string;
    username:string;
    password:string;
    birthDate:string;
    image:string;
    bloodGroup:string
    height:number;
    weight:number;
    eyeColor:string;
    hair:[{color:string,type:string}];
    address:[
        {address:string,city:string,
            coordinates:[{lat:string,lng:string}]
        ,postalCode:string,state:string}
        
        ];
    macAddress:string;
    university:string;
    bank:[{cardExpire:string,cardNumber:string,cardType:string,currency:string,iban:string}]
    
    
    
}
