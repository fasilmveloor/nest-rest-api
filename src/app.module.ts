import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item } from './items/entities/item.entity';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module'
//defining the module components

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      //forRoot() used to set conf of db
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'root',
      password : '',
      database : 'test',
      entities : [Item],
      synchronize : true,
      dropSchema : true,
    })
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
