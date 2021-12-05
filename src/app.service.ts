import { Injectable } from '@nestjs/common';

//defining the servieces for the controllers
@Injectable()//decorator which make sure that the serviece is injectable
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
