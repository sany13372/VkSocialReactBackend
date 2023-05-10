import { NestFactory } from '@nestjs/core';
import * as process from "process";
import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix('/api')
  //console.log(process.env.PORT)
  await app.listen(3800);
}
bootstrap();
