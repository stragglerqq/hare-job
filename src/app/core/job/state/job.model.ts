import { ID } from '@datorama/akita';
import { JobDto } from '@core/job/interface';
import { Salary } from '@core/job/interface/jobDto';
import { Seniority } from '@enums/Seniority';

export interface Job {
  id: ID;
  title: string;
  name: string;
  logo: string;
  posted: Date;
  renewed: Date;
  salary: Salary;
  seniority: Seniority[];
  url: string;
  categoryIds: ID[];
  technologyIds: ID[];
}

export function createJob({ id, name, logo, posted,
                            renewed, salary, seniority,
                            title, url, categoryIds, technologyIds }: JobDto): Job {
  return {
    id,
    name,
    title,
    logo,
    posted: new Date(posted),
    renewed: new Date(renewed),
    url,
    salary,
    seniority,
    categoryIds,
    technologyIds,
  };
}
