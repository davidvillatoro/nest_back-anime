import { IsArray, IsDate, IsDateString, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";
import { Transform } from 'class-transformer';


export class CreateAnimeDto {
  @IsNotEmpty({ message: "el nombre es requerido" })
  @IsString({ message: 'El nombre debe ser un texto' })
  @Length(1, 30, { message: 'El nombre debe tener entre 1 y 30 caracteres' })
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'El nombre solo puede contener letras, números y espacios',
  })
  @Transform(({ value }) => value.trim().toUpperCase())
  nombre: string;




  @IsString({ message: 'la descripccion debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'la descripccion es requerido' })
  descripccion: string;





  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio del producto debe ser un número' },
  )
  @IsOptional()
  precio?: number;
  
  
  
  
  
  @IsNumber(
    { maxDecimalPlaces: 0 },
    { message: 'La cantidad disponible en inventario debe ser un número' },
  ) 
  @IsOptional()
  inStock?: number;
  
  
  
  @IsDateString()
  @IsOptional()
  fechaLanzamiento?: Date;
  
  
  
  
  @IsString({ each: true, message: ' el genero debe ser un arreglo de strings' })
  @IsArray()
  @IsOptional()
  genero?: string[];


  @IsString()
  @IsOptional()
  Imagenes?: string

}
