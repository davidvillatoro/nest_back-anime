import { Module } from '@nestjs/common';

import { UploadImageService } from './upload_image.service';
import { uploadImageProvider } from './upload_image';
import { UploadImageController } from './upload_image.controller';

@Module({
  providers: [UploadImageService, uploadImageProvider],
  exports: [UploadImageService, uploadImageProvider],
  controllers: [UploadImageController]
})
export class UploadImageModule {}
