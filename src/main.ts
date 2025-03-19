import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

// Загружаем переменные окружения
dotenv.config();

// Создаем экземпляр Express-сервера
const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Стаматология API') // Название вашего API
    .setDescription('Документация API') // Описание
    .setVersion('1.0') // Версия API
    .addBearerAuth() // Если используете авторизацию
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Swagger будет доступен по /api/docs

  // Включаем CORS
  app.enableCors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    allowedHeaders: 'Content-Type, Authorization', // Разрешенные заголовки
  });

  // Логирование переменной окружения для подключения к базе данных

  // Динамическое подключение через переменную окружения для порта
  const port = process.env.PORT || 3000; 
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Запуск приложения
bootstrap();

// Экспортируем сервер для Vercel
export default server;
