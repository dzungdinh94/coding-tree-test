import { Test, TestingModule } from '@nestjs/testing';
import { CostService } from './cost.service';
import { Company } from 'src/company/entities/company.entity';

describe('CostService', () => {
  let service: CostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostService],
    }).compile();

    service = module.get<CostService>(CostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should calculate travel cost iteratively with path correctly', () => {
    const companiesMap = new Map<string | null, Company[]>();
    companiesMap.set('0', [
      {
        id: 'uuid-1',
        createdAt: '2021-02-26T00:55:36.632Z',
        name: 'Webprovise Corp',
        parentId: '0',
      },
    ]);
    companiesMap.set('uuid-1', [
      {
        id: 'uuid-2',
        createdAt: '2021-02-25T10:35:32.978Z',
        name: 'Stamm LLC',
        parentId: 'uuid-1',
      },
      {
        id: 'uuid-3',
        createdAt: '2021-02-25T15:16:30.887Z',
        name: 'Blanda, Langosh and Barton',
        parentId: 'uuid-1',
      },
    ]);

    const travelCostMap = new Map<string, number>();
    travelCostMap.set('uuid-1', 1221);
    travelCostMap.set('uuid-2', 1429);
    travelCostMap.set('uuid-3', 3847);
    const result = service.calculateTravelCost(companiesMap, travelCostMap);
    console.log(JSON.stringify(result));
    expect(result).toEqual([
      {
        id: 'uuid-1',
        parentId: '0',
        name: 'Webprovise Corp',
        cost: 6497,
        createdAt: '2021-02-26T00:55:36.632Z',
        children: [
          {
            id: 'uuid-3',
            parentId: 'uuid-1',
            name: 'Blanda, Langosh and Barton',
            createdAt: '2021-02-25T15:16:30.887Z',
            cost: 3847,
            children: [],
          },
          {
            id: 'uuid-2',
            parentId: 'uuid-1',
            name: 'Stamm LLC',
            cost: 1429,
            createdAt: '2021-02-25T10:35:32.978Z',
            children: [],
          },
        ],
      },
    ]);
  });
});
