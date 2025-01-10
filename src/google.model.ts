/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Model } from "mongoose";

export type UserGoogleDocument = UserGoogle & Document;

@Schema({ versionKey: false, timestamps: true })
export class UserGoogle extends Model<UserGoogle> {


    @ApiProperty({ example: "example@gmail.com", description: "User email example" })
    @Prop({ type: String })
    email: string;

    @ApiProperty({ example: "09623wqer12r12rsfad55522", description: "User GoogleId example" })
    @Prop({ type: String })
    googleId: string;

    @ApiProperty({ example: "tolya uso", description: "User first name example" })
    @Prop({ type: String })
    firstName: string;


}


export const UserGoogleSchema = SchemaFactory.createForClass(UserGoogle);

