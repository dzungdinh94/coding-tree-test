import { CreateCostInput } from './create-cost.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCostInput extends PartialType(CreateCostInput) {
  id: number;
}
