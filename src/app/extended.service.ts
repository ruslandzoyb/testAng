import { Injectable } from '@angular/core';
import { WorkExperienceApiService } from './work-experience-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExtendedService extends WorkExperienceApiService {
  extendedFromWorkExperience() {
    return this.getExperienceList();
  }
}
