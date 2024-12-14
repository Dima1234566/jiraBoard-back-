/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './card.model';
import { ConfigModule } from '@nestjs/config';
import { Board, BoardSchema } from './board.model';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env`,
  }),
  MongooseModule.forRoot(process.env.DB_HOST),
  MongooseModule.forFeature([{
    name: Card.name,
    schema: CardSchema,
    collection: "cards"
  }]),
  MongooseModule.forFeature([{
    name: Board.name,
    schema: BoardSchema,
    collection: "boards"
  }])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
