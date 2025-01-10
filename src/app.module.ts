/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './card.model';
import { ConfigModule } from '@nestjs/config';
import { Board, BoardSchema } from './board.model';
import { AppController } from './app.controller';
import { UserGoogle, UserGoogleSchema } from './google.model';
import { GoogleStrategy } from './utils/GoogleStategy';
import { SessionSerializer } from './utils/Serializer';

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
  }]), MongooseModule.forFeature([{
    name: UserGoogle.name,
    schema: UserGoogleSchema,
    collection: "users"
  }])

  ],
  controllers: [AppController],
  providers: [GoogleStrategy, SessionSerializer, AppService, { provide: 'APP_SERVICE', useClass: AppService }],
})
export class AppModule { }
