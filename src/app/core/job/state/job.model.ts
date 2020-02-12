import { ID } from '@datorama/akita';
import { JobDto } from '@core/job/interface';

export interface Job {
  id: ID;
  name: string;
}

export function createJob({ id, name }: JobDto): Job {
  return {
    id,
    name,
  };
}
