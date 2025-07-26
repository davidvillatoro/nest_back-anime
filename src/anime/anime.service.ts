import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PrismaClient } from 'generated/prisma';
import { log } from 'node:console';
import { PaginationDto } from 'src/common';
import { UploadImageService } from 'src/upload_image/upload_image.service';
import * as fs from 'fs';

@Injectable()
export class AnimeService extends PrismaClient implements OnModuleInit {

  constructor(private readonly uploadImageService: UploadImageService) {
    super();
  }

  private readonly logger = new Logger('AnimeService')

  async onModuleInit() {
    await this.$connect();
    this.logger.log('BBDD Conectada')
  }






  async create(createAnimeDto: CreateAnimeDto) {



    try {

      const { Imagenes, ...rest } = createAnimeDto;

      const newPersonaje = await this.personajes.create({
        data: {
          ...rest,
          fechaLanzamiento: new Date(createAnimeDto.fechaLanzamiento),
          Imagenes: { create: { url: Imagenes } },

        }
      })

      return { newPersonaje };

    } catch (error) {
      this.ManejoDeExceptions(error)

    }


  }




  a/* sync creatAnimeWithImage(animeData: any , imageFile: Express.Multer.File){
    let imageUrl: string;
    let publicID: string;

    //iniciar la transaccion de prisma 
    return this.$transaction( async(prisma) =>{

      try {
        
        //subir la imagen a cloudinary
        const uploadResult = await this.uploadImageService.uploadFile(imageFile);

        imageUrl = uploadResult.secure_url;
        publicID = uploadResult.public_id;

        //2 crear el producto en la bbdd con  la referencia de la imagen 
        const producto = await this.personajes.create({
          data: {
            ...animeData,
            Imagenes: {
              create: {
                url: imageUrl,
                publicID: publicID
              },
            },
          },
        });


        //3. eliminar el archivo temporal despues de la subida exitosa

        

        return producto;


      } catch (error) {

        //si hay algun error intenta eliminar la imagen de claudinary
        if (publicID) {
          await this.uploadImageService.deleteImage(publicID);
          
        }

      

        this.ManejoDeExceptions(error);

        throw error
        
      }

    })

    
  } */



  async findAll(PaginationDto: PaginationDto) {

    const { page, limit } = PaginationDto;

    const totalPage = await this.personajes.count();
    const lastPage = Math.ceil(totalPage / limit);

    const PersonajesAnime = await this.personajes.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        Imagenes: true,
      }


    })

    const data = PersonajesAnime.map((person) => ({
      ...person,
      Imagenes: person.Imagenes.url
    }))

    return {
      data,
      metadata: {
        totalPersonajes: totalPage,
        page,
        lastPage
      }
    }

  }



  async findOne(idPersonaje: string) {

    try {


      const Personaje = await this.personajes.findFirst({
        include: {
          Imagenes: true
        },
        where: { idPersonaje }
      });

      if (!Personaje) throw new NotFoundException(`el Personaje con el id  #${idPersonaje} no fue encontrado `)

      return {
        ...Personaje,
        Imagenes: Personaje.Imagenes.url
      };



    } catch (error) {
      this.ManejoDeExceptions(error);

    }


  }



  /* 
  
    async findOneNombre(term: string) {
  
      const Personaje = await this.personajes.findFirst({
        where: { nombre: term }
      })
  
      if (!Personaje) throw new NotFoundException(`el Personaje con el nombre  #${term} no fue encontrado `)
  
      return Personaje;
  
    } */



   async update(idPersonaje: string, updateAnimeDto: UpdateAnimeDto) {

    const {Imagenes, ...rest} =updateAnimeDto;

    try {

      await this.findOne(idPersonaje)
      const updataPersonaje = await this.personajes.update({
        where: { idPersonaje },
        data: rest
      })

      return updataPersonaje;

    } catch (error) {
      this.ManejoDeExceptions(error)

    }
  }
 

  
  async remove(idPersonaje: string) {  

    const { Imagenes } = await this.findOne(idPersonaje);

    const imageName = Imagenes.split('/')
      .pop()
      ?.split('.')[0] ?? '';




    await this.uploadImageService.deleteImage(imageName)

    return await this.personajes.delete({
      where: { idPersonaje }
    }), {
      data: {

        message: 'Personaje eliminado'
      }
    }



  }






  //metodos para errores comunes
  private ManejoDeExceptions(error: any) {


    if (error.code === 'P2002') {

      throw new BadRequestException(`El Nombre del personaje ya existe en la BBDD`);
    }


    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }


}
