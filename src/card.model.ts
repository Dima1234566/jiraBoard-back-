/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Model } from "mongoose";

export type CardDocument = Card & Document;

@Schema({ versionKey: false, timestamps: true })
export class Card extends Model<Card> {
    @ApiProperty({ example: 'Card title name', description: 'name of card' })
    @Prop({ type: String })
    title: string;

    @ApiProperty({ example: 'go to work', description: 'go to work in 23.12 at 15:00' })
    @Prop({ type: String })
    description: string;

    @ApiProperty({ example: '8275748de8172d1c', description: 'board id' })
    @Prop({ type: String })
    board: string;

    @ApiProperty({ example: 'to do, in process, done ', description: 'card status' })
    @Prop({ type: String, default: "do" })
    state: string;


}


export const CardSchema = SchemaFactory.createForClass(Card);

