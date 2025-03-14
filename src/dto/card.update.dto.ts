/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCardDto {
    @ApiProperty({ example: '124125wsst13w25', description: 'card id' })
    id: string

    @ApiProperty({ example: 'Card title name', description: 'name of card' })
    readonly title?: string;

    @ApiProperty({ example: 'go to work', description: 'go to work in 23.12 at 15:00' })
    readonly description?: string;

    @ApiProperty({ example: '8275748de8172d1c', description: 'board id' })
    readonly board?: string;

    @ApiProperty({ example: 'Process', description: 'card status' })
    readonly state?: string;
}
