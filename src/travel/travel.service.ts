import { Injectable } from '@nestjs/common';
import { CreateTravelInput } from './dto/create-travel.input';
import { UpdateTravelInput } from './dto/update-travel.input';
import { Company } from 'src/company/entities/company.entity';
import { Travel } from './entities/travel.entity';

@Injectable()
export class TravelService {
  create(createTravelInput: CreateTravelInput) {
    return 'This action adds a new travel';
  }

  createTravelCostMap(travels: Travel[]): Map<string, number> {
    const travelCostMap = new Map<string, number>();

    for (const travel of travels) {
      travelCostMap.set(
        travel.companyId,
        (travelCostMap.get(travel.companyId) || 0) + Number(travel.price),
      );
    }

    return travelCostMap;
  }

  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

  update(id: number, updateTravelInput: UpdateTravelInput) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
