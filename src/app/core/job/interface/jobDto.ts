export interface JobDto {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly posted: string;
  readonly renewed: string;
  readonly logo: string;
  readonly seniority: string;
  readonly url: string;
  readonly salary: Salary;
  readonly technologyIds: number[];
  readonly categoryIds: number[];
}

export interface Salary {
  from: number;
  to: number;
  currency: Currency;
}

export enum Currency {
   PLN,
   USD,
   EUR
}
