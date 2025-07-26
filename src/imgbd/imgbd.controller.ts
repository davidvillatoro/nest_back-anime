import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImgbdService } from './imgbd.service';
import { CreateImgbdDto } from './dto/create-imgbd.dto';
import { UpdateImgbdDto } from './dto/update-imgbd.dto';

@Controller('imgbd')
export class ImgbdController {
  constructor(private readonly imgbdService: ImgbdService) {}

  @Post()
  create(@Body() createImgbdDto: CreateImgbdDto) {
  
    return this.imgbdService.create(createImgbdDto);
  }

  @Get()
  findAll() {
    return this.imgbdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imgbdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImgbdDto: UpdateImgbdDto) {
    return this.imgbdService.update(+id, updateImgbdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imgbdService.remove(+id);
  }
}
