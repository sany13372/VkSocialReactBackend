import { NestFactory } from '@nestjs/core';
import * as process from "process";
import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  console.log(process.env.MONGO_URL)
  app.setGlobalPrefix('/api')
  await app.listen(process.env.PORT || 4200);
}
bootstrap();
