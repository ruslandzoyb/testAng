import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/work-experience';
import { WorkType } from '../models/worktype-enum';
import { WorkExperienceApiService } from '../work-experience-api.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  public workItems : WorkExperience[] = [];

  constructor(private experienceApiService : WorkExperienceApiService){
  this.workItems = this.experienceApiService.getExperienceList();
  console.log(this.workItems);
  }



  ngOnInit(): void {

}
}
