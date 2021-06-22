import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from "src/app/services/auth.service";
import { startWith,map } from "rxjs/operators";


@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export interface Product {
  idproduit: string;
  title: string;
  description: string;
  categorie_idcategorie: string;
  boutique_idboutique:string;
  nom:string;
}


export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  cours:any[]

  constructor(private authService: AuthService, private router: Router,private coursService:CoursService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });

    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.products.slice())
    );

  }
  filteredProducts: Observable<Product[]>;

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }

  private _filterStates(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(state => state.title.toLowerCase().indexOf(filterValue) === 0);
  }


  getCour() {

    this.coursService.getCours().subscribe((objects: any) => {
      this.cours = JSON.parse(objects.message);
      
    });
  }


}


