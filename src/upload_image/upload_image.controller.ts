import { Controller, Delete, Param } from '@nestjs/common';
import { UploadImageService } from './upload_image.service'; // Adjust the path as necessary


@Controller('upload-image')
export class UploadImageController {
    constructor( private readonly UploadImageService: UploadImageService) {}



    @Delete(':publicId')
    async deleteImage(@Param('publicId') publicId: string) {
        return await this.UploadImageService.deleteImage(publicId);
    }

    

}
