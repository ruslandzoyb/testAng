import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/work-experience';
import { WorkType } from '../models/worktype-enum';
import { WorkExperienceApiService } from '../work-experience-api.service';
import { ExtendedService } from '../extended.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],
})
export class BiographyComponent implements OnInit {
  public workItems: WorkExperience[] = [];

  constructor(private experienceApiService: WorkExperienceApiService, private fromWorkExperience: ExtendedService) {
    // this.workItems = this.experienceApiService.getExperienceList();
    // console.log(this.workItems);
    
    //public
    this.workItems = this.fromWorkExperience.getPublicExperienceList();
    console.log(this.workItems);

    //public
    this.workItems = this.experienceApiService.getExperienceListByWorkType(WorkType.Internship);
    console.log(this.workItems);
    this.workItems = this.experienceApiService.getExperienceListByWorkType(WorkType.FullTime);
    console.log(this.workItems);

    //protected from public
    this.workItems = this.fromWorkExperience.extendedFromWorkExperience();
    console.log(this.workItems);
  }

  ngOnInit(): void {}
}
