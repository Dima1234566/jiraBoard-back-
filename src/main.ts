/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as session from 'express-session';

import express from 'express';


async function start() {

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, new ExpressAdapter(express), {
    cors: true,
  });
  app.use(
    session({
      secret: process.env.GOOGLE_CLIENT_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Backend for to do board')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        description: 'JWT Authorization',
        type: 'http',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'BearerAuthMethod',
    ).addServer(`https://jiraboard-back.onrender.com`)
    .addServer(`http://localhost:${PORT}`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);



  await app.listen(PORT, () => {
    console.log(`server started on port = http://localhost:${PORT}`);

  });
}
start();




