/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UpdateBoardDto {

    @ApiProperty({ example: '21323123124', description: 'board id' })
    id: string;

    @ApiProperty({ example: 'BoardName', description: 'new name of board' })
    readonly name: string;

    @ApiProperty({ example: '1212312wdf1wsrf1w1', description: 'user google id' })
    readonly googleId: string;



}
