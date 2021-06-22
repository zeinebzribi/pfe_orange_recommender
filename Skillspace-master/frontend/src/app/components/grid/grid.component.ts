import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';

import { CoursService } from 'src/app/cours.service';
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
  
  constructor(private coursService:CoursService,private router:Router) { }

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


    console.log(item)
    this.router.navigateByUrl('/pred/'+item._id)

  }
}

