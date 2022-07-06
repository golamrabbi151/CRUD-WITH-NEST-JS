import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';

@Module({
  imports:[TypeOrmModule.forFeature([OrderRepository])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
