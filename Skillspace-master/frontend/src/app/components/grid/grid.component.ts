import { Component, OnInit } from '@angular/core';
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
  
  constructor(private coursService:CoursService) { }

  ngOnInit() {
    this.getTopRatedCours();
  }
  

  getTopRatedCours() {
    this.coursService.getTopRated().subscribe((objects: any[]) => {

      this.cours = objects["message"]

    });
  }
}

