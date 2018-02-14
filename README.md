# Registration-Form-by-using-angular4

Registration-Form is a simple component for Registration-Form-Page using angular and bootstrap.
In this form all validations are done for different type of input feilds. 

## Different type of input fields

name,userid,password,confirm password,Date of Birth,gender,country,address,pincode,mobile number and email address etc..

## How it works

At each and every field if user enter invalid input it shows error message and finally still anything is invalid in the form then
submit button will not enabled,after all entered values are valid only that submit button will enable.  

## @Output Decorator
@Output has been used to provide user with required output.For this i have used EventEmitter, whenever some event will be called user will get result.

   ngSubmit=function(userList){
     this.getobject.emit(userList)
   }
   
This method will give user details what ever they entered.

