import { Transform } from "class-transformer"
import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator"


export class CreateUserDto {

    @IsString()
    @MinLength(1, { message: 'El nombre debe tener almenos 1 caracter' })
    name: string


    @IsString()
    @IsEmail()
    @Transform(({ value }) => value.trim().toLowerCase())
    email: string


    @IsString()
    @IsStrongPassword({}, { message: 'La contraseña no es lo suficientemente fuerte' })
    password: string
}