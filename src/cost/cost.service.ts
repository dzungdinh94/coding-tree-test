/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { CreateCostInput } from './dto/create-cost.input';
import { UpdateCostInput } from './dto/update-cost.input';
import { Company } from 'src/company/entities/company.entity';
import { CompanyWithTravelCost } from './entities/cost.entity';

@Injectable()
export class CostService {
  calculateTravelCost(
    companiesMap: Map<string | null, Company[]>,
    travelCostMap: Map<string, number>,
  ): CompanyWithTravelCost[] {
    const nestedCompanies: CompanyWithTravelCost[] = [];
    const stack: {
      company: Company;
      parentNode: CompanyWithTravelCost | null;
    }[] = [];

    // Add root companies to the stack
    for (const company of companiesMap.get('0') || []) {
      stack.push({ company, parentNode: null });
    }
    while (stack.length > 0) {
      const { company, parentNode } = stack.pop()!;
      const companyTravelCost = travelCostMap.get(company.id) || 0;
      const childrenCompanies = companiesMap.get(company.id) || [];

      const companyWithTravelCost: CompanyWithTravelCost = {
        ...company,
        cost: companyTravelCost,
        children: [],
      };

      if (parentNode) {
        parentNode.children.push(companyWithTravelCost);
      } else {
        nestedCompanies.push(companyWithTravelCost);
      }

      for (const childCompany of childrenCompanies) {
        stack.push({
          company: childCompany,
          parentNode: companyWithTravelCost,
        });
      }
    }
    function updateTotalTravelCostIteratively(
      rootCompanies: CompanyWithTravelCost[],
    ): void {
      const updateStack: {
        company: CompanyWithTravelCost;
        visitedChildren: number;
      }[] = rootCompanies.map((company) => ({
        company,
        visitedChildren: 0,
      }));

      while (updateStack.length > 0) {
        const current = updateStack[updateStack.length - 1];

        if (current.visitedChildren < current.company.children.length) {
          const childCompany =
            current.company.children[current.visitedChildren];
          updateStack.push({ company: childCompany, visitedChildren: 0 });
          current.visitedChildren++;
        } else {
          if (updateStack.length > 1) {
            updateStack[updateStack.length - 2].company.cost +=
              current.company.cost;
          }
          updateStack.pop();
        }
      }
    }

    // Update travel costs for all root companies
    updateTotalTravelCostIteratively(nestedCompanies);

    return nestedCompanies;
  }
}
