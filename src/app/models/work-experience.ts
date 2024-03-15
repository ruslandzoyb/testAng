import { WorkType } from "./worktype-enum";

export interface WorkExperience{
  position: string;
  workType : WorkType;
  location: string;
  company: string;

  dateEmployment: string;
}

