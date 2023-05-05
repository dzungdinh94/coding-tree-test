import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyService],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a companies map correctly', () => {
    const companies = [
      {
        id: 'uuid-1',
        createdAt: '2021-02-26T00:55:36.632Z',
        name: 'Webprovise Corp',
        parentId: '0',
      },
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
      {
        id: 'uuid-4',
        createdAt: '2021-02-25T06:11:47.519Z',
        name: 'Price and Sons',
        parentId: 'uuid-2',
      },
    ];

    const companiesMap = service.createCompaniesMap(companies);
    expect(companiesMap.get('0')).toEqual([
      {
        id: 'uuid-1',
        createdAt: '2021-02-26T00:55:36.632Z',
        name: 'Webprovise Corp',
        parentId: '0',
      },
    ]);
    expect(companiesMap.get('uuid-1')).toEqual([
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
  });
});
