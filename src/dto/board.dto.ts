/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UpdateBoardDto {

    id: string;

    @ApiProperty({ example: 'BoardName', description: 'new name of board' })
    readonly name: string;


}
