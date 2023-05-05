import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostResolver } from './cost.resolver';
import { CompanyModule } from 'src/company/company.module';
import { TravelModule } from 'src/travel/travel.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      path: '/api/v1',
    }),
    CompanyModule,
    TravelModule,
  ],
  providers: [CostResolver, CostService],
})
export class CostModule {}
