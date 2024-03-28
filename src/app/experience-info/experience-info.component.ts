import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../models/work-experience';
import { WorkType } from '../models/worktype-enum';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {
  isColourWorkTypeChanged(): string {
    // return this.experienceInfo.workType === WorkType.FullTime;
    if (this.experienceInfo.workType  === WorkType.FullTime) {
      return 'fullTime-mode';
    } else {
      return 'internship-mode'
    }
  }

  @Input()
  experienceInfo!: WorkExperience;

  ngOnInit(): void {
  }

}
