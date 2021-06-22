import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { 

  }
  baseUrl = 'http://localhost:5006/';

  public getCours(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'allcourses');
  }

  public getTopRated(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'topRated');
  }

  public getCoursPerName(name:string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'pred/'+name);
  }


  public getCoursById(id:string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'getFormationById/'+id);
  }


}
