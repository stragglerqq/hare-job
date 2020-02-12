import { ID } from '@datorama/akita';
import { JobDto } from '@core/job/interface';

export interface Job {
  id: ID;
  name: string;
  categoryIds: ID[];
  technologyIds: ID[];
}

export function createJob({ id, name, categoryIds, technologyIds }: JobDto): Job {
  return {
    id,
    name,
    categoryIds,
    technologyIds,
  };
}
