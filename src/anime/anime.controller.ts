import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PaginationDto } from 'src/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageService } from 'src/upload_image/upload_image.service';

@Controller('anime')
export class AnimeController {
  constructor(
    private readonly animeService: AnimeService,
    private readonly UploadImageService: UploadImageService,
  ) { }


  @Post()
  
   create(   
    @Body() createAnimeDto: CreateAnimeDto,
) {
    return this.animeService.create(createAnimeDto);
  }




  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.animeService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.animeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAnimeDto: UpdateAnimeDto) {
    return this.animeService.update(id,updateAnimeDto )
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.animeService.remove(id);
  }

  /* 
  para poner un dato adicional si los dos son la misma peticion de id sale not foun 404 slocion   @Get('name/:term')------
    
    @Get('name/:term')
    findOneNombre(@Param('term',) term: string) {
      return this.animeService.findOneNombre(term);
    }
   */


  /* para imagens---------------- */
  @Post('upload-image')
  @UseInterceptors(FileInterceptor('imagen'))
  uploadImage(@UploadedFile() imagen: Express.Multer.File) {
    if (!imagen) {
      throw new BadRequestException('No se subió ninguna imagen log');
    }
    return this.UploadImageService.uploadFile(imagen);  
  }

/* 
  @Delete('id/:publicId')
  async deleteImage(@Param('publicId') publicId: string) {
    return await this.UploadImageService.deleteImage(publicId);
  }
 */


}
