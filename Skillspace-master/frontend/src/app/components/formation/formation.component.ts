import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { CoursService } from 'src/app/cours.service';
import { AuthService } from "src/app/services/auth.service";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  constructor(private coursService:CoursService,private router:Router, public modalService:NgbModal) { }
  page: number = 1;
  config: any;

  starRating = 0; 
  cours:any[]
  cours1:any
  user : any;
  isAuthenticated = false;
  
  ngOnInit() {
    this.getCour();

  
  }
  
  getCour() {
    this.coursService.getCours().subscribe((objects: any) => {
      this.cours = JSON.parse(objects.message);
      console.log(this.cours.length)

      this.cours1=this.cours[1];
 
      console.log(this.cours1.course_name);
      this.config = {
        itemsPerPage: 6,
        currentPage: 1, 
        totalItems: this.cours.length
      };
  
      
    });
  }
  pageChanged(event){
    this.config.currentPage = event;
    console.log(event)
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
