/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AppService } from 'src/app.service';
import { UserGoogle } from 'src/google.model';


@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('APP_SERVICE') private readonly appService: AppService,
    ) {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    serializeUser(user: UserGoogle, done: Function) {
        done(null, user);
    }



    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    async deserializeUser(payload: any, done: Function) {
        const users = await this.appService.findByUserId(payload.id);
        return users ? done(null, users) : done(null, null);
    }
}