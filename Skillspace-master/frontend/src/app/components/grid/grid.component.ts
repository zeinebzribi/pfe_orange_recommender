import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

import { CoursService } from 'src/app/cours.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  starRating = 0; 
  cours:any[]
  cours1:any
  cours2:any
  cours3:any
  user : any;
  isAuthenticated = false;

  constructor(private coursService:CoursService,private router:Router,private authService: AuthService, public modalService:NgbModal) { }

  ngOnInit() {
    this.getTopRatedCours();
 
  }
  

  getTopRatedCours() {
    this.coursService.getTopRated().subscribe((objects: any[]) => {

      this.cours = objects["message"]
      console.log(this.cours)

    });
  }
  
  moveToFormationDetail(item)
  {

    try{

      this.user = JSON.parse(sessionStorage.getItem('user'))

      if(this.user.auth== true)
      { console.log(item)
        this.router.navigateByUrl('/pred/'+item._id)
        this.isAuthenticated = true 
      }else{
        console.log(this.user)

        this.isAuthenticated = false
      }

    }catch{
      const modalRef = this.modalService.open('Merci de vous connectez pour accéder aux cours.');
      
      this.isAuthenticated = false

    }
   

  }
}

