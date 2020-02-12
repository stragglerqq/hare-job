import { CategoryDto } from '@core/category/interface';
import { ID } from '@datorama/akita';

export interface Category {
  id: ID;
  name: string;
}

export function createCategory({ id, name }: CategoryDto): Category {
  return {
    id,
    name,
  };
}
