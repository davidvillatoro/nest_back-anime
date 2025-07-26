import { Module } from '@nestjs/common';

import { AnimeModule } from './anime/anime.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadImageModule } from './upload_image/upload_image.module';
import { ImgbdModule } from './imgbd/imgbd.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public', // Prefijo para la ruta de acceso a las imágenes
    }),

    
    ConfigModule.forRoot()
    , AnimeModule, UploadImageModule, ImgbdModule, AuthModule
    


  ], 

})
export class AppModule { }
