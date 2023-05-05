import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  create(createCompanyInput: CreateCompanyInput) {
    return 'This action adds a new company';
  }
  createCompaniesMap(companies: Company[]): Map<string | null, Company[]> {
    const companiesMap = new Map<string | null, Company[]>();

    for (const company of companies) {
      const parentId = company.parentId;
      if (!companiesMap.has(parentId)) {
        companiesMap.set(parentId, []);
      }
      companiesMap.get(parentId)?.push(company);
    }

    return companiesMap;
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
