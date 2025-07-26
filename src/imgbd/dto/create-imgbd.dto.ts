import { IsOptional, IsString } from "class-validator";


export class CreateImgbdDto {

    @IsString()
    personajesIdPersonaje?:  string


    @IsString()
    url?: string
}
