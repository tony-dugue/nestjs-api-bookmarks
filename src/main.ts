import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // on instancie l'application
  await app.listen(3000); // on exécute le serveur sur le port 3000
}
bootstrap();
