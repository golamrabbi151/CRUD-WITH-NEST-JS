import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { getRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) { }
  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto: ', createUserDto);
    const userData = await this.userRepository.save(createUserDto);
    if (!userData) {
      console.log('user not created');

    }
    return userData;
  }

  async findAll() {
    const users = await getRepository(User).createQueryBuilder('user').getMany()
    return users
  }

  async findOne(id: number) {
    console.log("user id: ", id);
    const user = await this.userRepository.findOne(id)
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto)
    if (!user) {
      console.log("user not updated");

    }
    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.softDelete(id)
    return user
  }
}
