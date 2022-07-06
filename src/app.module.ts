import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
