/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { AppService } from 'src/app.service';




@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly appService: AppService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECT,
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        try {
            const user = await this.appService.validateUser({
                email: profile.emails[0].value,
                googleId: profile.id,
                firstName: profile.name.givenName,

            });
            return user || null;
        } catch (e) {
            console.log(e);
        }
    }
}