import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { CoursService } from 'src/app/cours.service';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  constructor(private coursService:CoursService,private router:Router) { }
  page: number = 1;
  config: any;

  starRating = 0; 
  cours:any[]
  cours1:any

  
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
    console.log("ssssss")
    this.router.navigateByUrl('/pred/'+item._id)

  }


}
