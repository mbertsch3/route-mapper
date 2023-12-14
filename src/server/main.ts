import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Get average lat/lon for given set')
    .setDescription('Get average lat/lon for given set')
    .setVersion('1.0')
    .addServer('http://localhost:3009/', 'Local environment')
    .addServer('https://dfliseriesstaging.corp.daytonfreight.local/', 'Staging')
    .addTag('API Tag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3009);
}
bootstrap();
