import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { UploadImageModule } from 'src/upload_image/upload_image.module';



@Module({
  imports: [UploadImageModule],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
