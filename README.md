# Registration-Form-by-using-angular

Registration-Form is a simple component for Registration-Form-Page using angular and bootstrap.
In this form I have taken all type of input feilds which ever we use most frequently and i have performed all validations for each and every field. 

## Different type of input fields

name,userid,password,confirm password,Date of Birth,gender,country,address,pincode,mobile number and email address etc..

## How it works

At each and every field if user enter invalid input it shows error message and finally still anything is invalid in the 
Registration-form then submit button will not be enabled , whenever user enter proper valuesthen only submit button will enable for submitting user data.  

## @Output Decorator
@Output has been used to provide user with required output.For this i have used EventEmitter, whenever some event will be called user will get result.

   **ngSubmit=function(userList){
     this.getobject.emit(userList)
   }**
   
From this method we can get complete user details on the console in the form of array.

Demo url: https://angular-x66gqc-puwncs.stackblitz.io/

