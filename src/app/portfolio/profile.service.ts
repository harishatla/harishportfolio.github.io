import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( ) { }
  about:any=`Software Developer with 1.5years of experience.
             Expertise in Angular 11,HTML,CSS Bootstrap,TypeScript and AWS.
             Worked with Agile Methodology.
             Part of AI Innovation Team.`

  skillsData: any=[
    {
      'id': '1',
      'skill': 'ANGULAR ',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT ',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '50%'
    },
    {
      'id': '6',
      'skill': 'HTML/CSS',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'AWS',
      'progress': '50%'
    },

  ];

  skills(): Observable<any>{
    return this.skillsData;
  }
  


}
