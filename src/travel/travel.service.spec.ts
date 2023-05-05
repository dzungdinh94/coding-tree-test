import { Test, TestingModule } from '@nestjs/testing';
import { TravelService } from './travel.service';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelService],
    }).compile();

    service = module.get<TravelService>(TravelService);
  });

  it('should create a travel cost map correctly', () => {
    const travels = [
      {
        id: 'uuid-t35',
        createdAt: '2020-05-04T02:07:36.180Z',
        employeeName: 'Newton Homenick',
        departure: 'France',
        destination: 'Republic of Korea',
        price: '315.00',
        companyId: 'uuid-10',
      },
      {
        id: 'uuid-t36',
        createdAt: '2020-04-07T02:28:42.819Z',
        employeeName: 'Hollie Langosh PhD',
        departure: 'United Kingdom',
        destination: 'Mauritius',
        price: '970.00',
        companyId: 'uuid-10',
      },
      {
        id: 'uuid-t37',
        createdAt: '2020-03-28T20:31:19.127Z',
        employeeName: 'Nathanial Medhurst',
        departure: 'United Arab Emirates',
        destination: 'Sierra Leone',
        price: '870.00',
        companyId: 'uuid-10',
      },
      {
        id: 'uuid-t33',
        createdAt: '2020-08-22T05:33:58.816Z',
        employeeName: 'Marcos Thompson',
        departure: 'Azerbaijan',
        destination: 'Sweden',
        price: '932.00',
        companyId: 'uuid-9',
      },
      {
        id: 'uuid-t34',
        createdAt: '2020-06-16T20:39:46.139Z',
        employeeName: 'Katrina Konopelski',
        departure: 'Senegal',
        destination: 'Timor-Leste',
        price: '474.00',
        companyId: 'uuid-9',
      },
      {
        id: 'uuid-t29',
        createdAt: '2020-11-19T12:55:19.924Z',
        employeeName: 'Rachael Bauch',
        departure: 'Senegal',
        destination: 'India',
        price: '740.00',
        companyId: 'uuid-8',
      },
      {
        id: 'uuid-t30',
        createdAt: '2020-05-26T11:14:26.763Z',
        employeeName: 'Alana Hettinger',
        departure: 'Mongolia',
        destination: 'Netherlands',
        price: '689.00',
        companyId: 'uuid-8',
      },
    ];

    const travelCostMap = service.createTravelCostMap(travels);
    expect(travelCostMap.get('uuid-8')).toBe(1429);
    expect(travelCostMap.get('uuid-9')).toBe(1406);
    expect(travelCostMap.get('uuid-10')).toBe(2155);
  });
});
