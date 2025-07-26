import { Module } from '@nestjs/common';
import { ImgbdService } from './imgbd.service';
import { ImgbdController } from './imgbd.controller';

@Module({
  controllers: [ImgbdController],
  providers: [ImgbdService],
})
export class ImgbdModule {}
