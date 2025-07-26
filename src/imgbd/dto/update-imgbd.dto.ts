import { PartialType } from '@nestjs/mapped-types';
import { CreateImgbdDto } from './create-imgbd.dto';

export class UpdateImgbdDto extends PartialType(CreateImgbdDto) {}
