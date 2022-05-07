import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // on instancie l'application
  const app = await NestFactory.create(AppModule);

  // activation globalement des pipes de validation dans l'app
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // on exécute le serveur sur le port 3000
  await app.listen(3000);
}
bootstrap();
