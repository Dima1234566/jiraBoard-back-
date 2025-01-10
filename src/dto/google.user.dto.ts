/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class GoogleUserDto {
    @ApiProperty({ example: "example@gmail.com", description: "User email example" })
    readonly email: string;
    @ApiProperty({ example: "09623wqer12r12rsfad55522", description: "User googleId example" })
    readonly googleId: string;
    @ApiProperty({ example: "tolya uso", description: "User first name example" })
    readonly firstName: string;

}