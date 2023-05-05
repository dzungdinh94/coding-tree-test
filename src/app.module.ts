import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import { CompanyModule } from './company/company.module';
import { CostModule } from './cost/cost.module';

@Module({
  imports: [TravelModule, CompanyModule, CostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
