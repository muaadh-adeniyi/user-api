import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  app.setGlobalPrefix('api/v1');

  const port = process.env.PORT ?? 4000;
  await app.listen(port);

  console.log(`🚀 Server is running at: \x1b[36mhttp://localhost:${port}/api/v1\x1b[0m`);
}

bootstrap();
