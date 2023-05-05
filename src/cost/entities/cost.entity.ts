import { Company } from 'src/company/entities/company.entity';

export class Cost {}
export interface CompanyWithTravelCost extends Company {
  cost: number;
  children: CompanyWithTravelCost[];
}
