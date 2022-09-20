import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private profileService:ProfileService) { }
  skills:any

  ngOnInit(): void {
    this.skills=this.profileService.skills() 
    console.log(this.skills);

  }

}
