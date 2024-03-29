import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { LoggerService } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
    logger: new LoggerService(),
  });

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Human Resources API')
    .setDescription('The Human Resources API software.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.API_PORT || 5000;

  await app.listen(port);
}
bootstrap();
