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
  public myerror;
  public gender;


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

  selected(e){
    this.gender=e;
  }
  validate(ip,cp){
    if(ip!=cp){
      this.myerror=" Confirm Password is not matched !";
    }
    else{
      this.myerror="";
    }
  }
  userList:User[]=[];
  form:FormGroup;

  addUser(form){
    this.userList.push(this.form.value);
    console.log(this.userList);
    }

  constructor() { }

  ngOnInit() {

    this.form=new FormGroup({
      name:new FormControl("",[Validators.required,
      Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      
      uid:new FormControl("",[Validators.required,
      Validators.pattern("[a-zA-Z][a-zA-Z0-9_]+")]),
      
      pwd:new FormControl("",[Validators.required,
        ,Validators.minLength(5),
        Validators.maxLength(15)]),

      cpwd:new FormControl("",Validators.required),

      dob:new FormControl("",Validators.required),

      gender:new FormControl("",Validators.required),

      country:new FormControl("",Validators.required),

      address:new FormControl("",[Validators.required,
      ,Validators.minLength(15),
      Validators.maxLength(50)]),
         
      pincode:new FormControl("",[Validators.required,
      Validators.pattern('[0-9]*'),Validators.minLength(6),
      Validators.maxLength(6)]),

      contact:new FormControl("",[Validators.required,
      Validators.pattern('^[6|7|8|9][0-9]*'),Validators.minLength(10),
      Validators.maxLength(10)]),
      
      email:new FormControl("",[Validators.required,Validators.email])

    })
  }
  // To check in console whether data is submitting or not 

   ngSubmit=function(userList){
     this.getobject.emit(userList)
   }

  }