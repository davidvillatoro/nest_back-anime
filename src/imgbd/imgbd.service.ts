import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateImgbdDto } from './dto/create-imgbd.dto';
import { UpdateImgbdDto } from './dto/update-imgbd.dto';
import { PrismaClient } from 'generated/prisma';
import { PrismaService } from 'src/share/prisma/prisma.service';

@Injectable()
export class ImgbdService extends PrismaClient implements OnModuleInit {


  async onModuleInit() {
    await this.$connect();
  }


  async create(createImgbdDto:CreateImgbdDto) {
    return this.imagenes.create({data: createImgbdDto})
  }





  findAll() {
    return `This action returns all imgbd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imgbd`;
  }

  update(id: number, updateImgbdDto: UpdateImgbdDto) {
    return `This action updates a #${id} imgbd`;
  }

  remove(id: number) {
    return `This action removes a #${id} imgbd`;
  }
}
