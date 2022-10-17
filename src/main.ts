import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`);
  });
}
bootstrap();
