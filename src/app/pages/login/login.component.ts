import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule ,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  reqValidation = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.pattern("\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b")]),
    password: new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(20)])
  })

  get emailValid() {
    return this.reqValidation.controls["email"].valid
  }
  get passwordValid() {
    return this.reqValidation.controls["password"].valid
  }
  isValid: boolean = true
  add() {
  if(this.reqValidation.valid){
    this.isValid=true
  }else{
    this.isValid=false
  }
  }
}