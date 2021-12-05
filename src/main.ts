import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Entry point of the project
async function bootstrap() {
  const app = await NestFactory.create(AppModule);//Creating the module for the app
  await app.listen(3000);//Allow app to run in the port 3000
}
bootstrap();
