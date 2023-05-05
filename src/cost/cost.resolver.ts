import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CostService } from './cost.service';
import { CreateCostInput } from './dto/create-cost.input';
import { UpdateCostInput } from './dto/update-cost.input';
import { CompanyService } from 'src/company/company.service';
import { TravelService } from 'src/travel/travel.service';
import { travels } from '../data-source/travel';
import { companies } from '../data-source/company';

@Resolver('Cost')
export class CostResolver {
  constructor(
    private readonly costService: CostService,
    private readonly companyService: CompanyService,
    private readonly travelService: TravelService,
  ) {}

  @Query('calculateCost')
  calculateCost() {
    const travelCostMap = this.travelService.createTravelCostMap(travels);
    const companiesMap = this.companyService.createCompaniesMap(companies);
    return this.costService.calculateTravelCost(companiesMap, travelCostMap);
  }
}
