import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';
import { User} from"../user";
import { FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class RegistrationComponent implements OnInit {

  private errorMessage;
  private gender;

  
  @Output()getobject=new EventEmitter();

   countries: string[] = [
    'India',
    'USA',
    'UK',
    'Canada',
    'France',
    'China',
    'Italy'
  ];

  selected(genderType:string){
    this.gender=genderType;
  }

  validate(password1:string,password2:string){
    if(password1!=password2){
      this.errorMessage=" Confirm Password is not matched !";
    }
    else{
      this.errorMessage="";
    }
  }

  userList:User[]=[];
  form:FormGroup;

  Details;
  success;

  addUser(form){
    this.userList.push(this.form.value);
    console.log(this.userList);
    this.Details=this.userList;
    this.success=true;
    }

  constructor() { }

  ngOnInit() {
 
    this.form=new FormGroup({
      name:new FormControl("",[Validators.required,
      Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      
      userId:new FormControl("",[Validators.required,
      Validators.pattern("[a-zA-Z][a-zA-Z0-9_]+")]),
      
      password:new FormControl("",[Validators.required,
        ,Validators.minLength(5),
        Validators.maxLength(15)]),

      confirmPassword:new FormControl("",Validators.required),

      dateOfBirth:new FormControl("",Validators.required),

      gender:new FormControl("male",Validators.required),

      country:new FormControl("",Validators.required),

      address:new FormControl("",[Validators.required,
      Validators.minLength(15),Validators.maxLength(50)]),
         
      pincode:new FormControl("",[Validators.required,
      Validators.pattern('[0-9]*'),Validators.maxLength(6),
      Validators.maxLength(6)]),

      mobileNumber:new FormControl("",[Validators.required,
      Validators.pattern('^[6|7|8|9][0-9]*'),Validators.minLength(10),
      Validators.maxLength(10)]),
      
      email:new FormControl("",[Validators.required,Validators.email])

    })
  }
  // To check in console whether data is submitting or not 

   ngSubmit=function(userList){
   this.getobject.emit(userList);
     
      }

  }
