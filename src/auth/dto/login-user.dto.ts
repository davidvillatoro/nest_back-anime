import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator"


export class LoginUserDTO {


    @IsNotEmpty({ message: 'El email es requerido' })
    @IsString()
    @IsEmail()
    @Transform(({ value }) => value.trim().toLowerCase())
    email: string

    @IsNotEmpty({ message: 'La contraseña es requerido' })
    @IsString()
    @IsStrongPassword({}, { message: 'La contraseña no es lo suficientemente fuerte' })
    password: string
}