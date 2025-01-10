/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Model } from "mongoose";

export type BoardDocument = Board & Document;

@Schema({ versionKey: false, timestamps: true })
export class Board extends Model<Board> {
    @ApiProperty({ example: 'BoardName', description: 'new name of board' })
    @Prop({ type: String })
    name: string;

    @ApiProperty({ example: '121541251wsraq2', description: 'user id' })
    @Prop({ type: String })
    userId: string;

}


export const BoardSchema = SchemaFactory.createForClass(Board);

