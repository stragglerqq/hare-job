import { ID } from '@datorama/akita';
import { TechnologyDto } from '@core/technology/interface';

export interface Technology {
  id: ID;
  name: string;
}

export function createTechnology({ id, name }: TechnologyDto): Technology {
  return {
    id,
    name,
  };
}
