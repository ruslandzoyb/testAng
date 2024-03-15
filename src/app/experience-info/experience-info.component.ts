import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {
  @Input()
  experienceInfo!: WorkExperience;

  ngOnInit(): void {
  }

}
