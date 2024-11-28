import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Interceptor } from './Interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const middleware = new Interceptor();
  app.use(middleware.authenticate);
  await app.listen(3000);
}
bootstrap();
