import { Injectable } from '@angular/core';
import { WorkExperience } from './models/work-experience';
import { WorkType } from './models/worktype-enum';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceApiService {
  // imitation of loading data from back end
  getExperienceListByWorkType(workType: WorkType): WorkExperience[] {
    return this.getExperienceListStorage().filter(
      (x) => x.workType === workType
    );
  }
  getPublicExperienceList(): WorkExperience[] {
    return this.getExperienceListStorage();
  }
  protected getExperienceList(): WorkExperience[] {
    return this.getExperienceListStorage();
  }
  private getExperienceListStorage(): WorkExperience[] {
    return [
      {
        position: 'Junior Web Developer',
        company: `Dr. Rajkumar's Learning App`,
        dateEmployment: 'Sep 2021 - Dec 2021',
        location: 'Bengaluru',
        workType: WorkType.FullTime,
      },
      {
        position: 'Web Development Intern',
        company: `IonPixelz Web Solutions`,
        dateEmployment: 'Sep 2021 - Dec 2021',
        location: 'Bengaluru',
        workType: WorkType.Internship,
      },
    ];
  }
}
