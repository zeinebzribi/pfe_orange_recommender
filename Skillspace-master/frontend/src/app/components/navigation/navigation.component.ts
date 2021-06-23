import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "src/app/services/auth.service";
import { CoursService } from "src/app/cours.service";

import { startWith,map,find } from "rxjs/operators";
import { FormControl } from "@angular/forms";

export interface Cours {

  course_name: string;

}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})


export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  cours:any[]

  coursFormControl = new FormControl()

  constructor(private authService: AuthService, private router: Router,private coursService:CoursService) {}

  ngOnInit(): void {
    this.getCour() 
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });

   

  }


  filteredCourses: Observable<Cours[]>;

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }

  private _filterStates(value: string): Cours[] {
    const filterValue = value.toLowerCase();
    console.log("filterValue")
    return this.cours.filter(state => state.course_name.toLowerCase().indexOf(filterValue) === 0);
  }


  getCour() {

    this.coursService.getCours().subscribe((objects: any) => {
      this.cours = JSON.parse(objects.message);
      if(this.coursFormControl.value != null)
      {
        console.log(this.coursFormControl.value)
      }
      this.filteredCourses = this.coursFormControl.valueChanges.pipe(

        startWith(''),
        map(state => state ? this._filterStates(state) : [])

        ) ;
    
    });

  }

    
  moveToFormationDetail(item)
  {


    console.log(item)
    this.router.navigateByUrl('/pred/'+item._id)

  }


}


