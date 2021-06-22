import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/cours.service';

@Component({
  selector: 'app-videoplayliste',
  templateUrl: './videoplayliste.component.html',
  styleUrls: ['./videoplayliste.component.scss']
})
export class VideoplaylisteComponent implements OnInit {
  

  videoItems = [
    {
      name: 'First Video',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      name: 'Second Video',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data;
  id = ""
  cours:any[]
  coursSimilaires:any[] = []
  detailCours:any

  constructor(private serviceRoute: ActivatedRoute,private coursService:CoursService) { }
  ngOnInit() {
   // this.name = this.serviceRoute.snapshot.params.url;
   // console.log(this.name);
   
   this.id = this.serviceRoute.snapshot.params.id
   this.getCoursById(this.id);
   this.getCour();

   }


  videoPlayerInit(data) {
    this.data = data;

    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

  name= this.id
  getCour() {

    this.coursService.getCoursPerName(this.id).subscribe((objects: any) => {
      this.cours = JSON.parse(objects["message"]);

      this.cours.forEach(element => {
        
        let el = element
        let index = {index:Object.keys(element["index"])}
      
        this.coursSimilaires.push({el,index})  
        
      });

      this.cours = this.coursSimilaires

    });
  }



  getCoursById(id)
  {

    this.coursService.getCoursById(id).subscribe((objects: any)=>{


      this.detailCours = JSON.parse(objects["message"])[0]
      

    })


  }
}
