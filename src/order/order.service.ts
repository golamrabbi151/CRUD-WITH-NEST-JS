import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {

  constructor(@InjectRepository(OrderRepository) private readonly orderRepository: OrderRepository) { }

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.save(createOrderDto)
    return order;
  }

  async findAll() {

    const orders = await getRepository(Order)
        .createQueryBuilder('order')
        .innerJoin('order.user', 'user')
        .select([
            'order.id',
            'order.productName',
            'order.productQuantity',
            'order.amount',
            'user.name'
        ])
        .getMany();
  
    return orders;
  }


 async findOne(id: number) {
  const order = await this.orderRepository.findOne(id, {relations: ['user']})
  return order;
  }

 async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.update(id, updateOrderDto)
    return order
  }

  async remove(id: number) {
    const order = await this.orderRepository.delete(id)
    return order
  }
}
