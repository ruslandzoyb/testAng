import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {
  @Input()
  experienceInfo!: WorkExperience;

  @Output() childClick = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClick(){
    this.childClick.emit('Child emitted value');
  }

}
