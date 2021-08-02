import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";
import { NavigationExtras,Router } from '@angular/router';

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  login(): void {

    this.authService
      .signin({"email":this.loginForm.value.email,"password": this.loginForm.value.password})
      .subscribe(res=>{

        if(res.auth==true){
          
          sessionStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(['/']).then(()=>{

            location.reload()


          })

        }else{



        }
        

      },err=>{


      });
  }
  



}
