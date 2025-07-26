import { BadRequestException, Injectable, InternalServerErrorException, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, User } from 'generated/prisma';


import * as bycrypt from 'bcrypt'
import { CreateUserDto, LoginUserDTO } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {

  constructor(
    private readonly jwtService: JwtService
  ){
    super();
  }


  async onModuleInit() {
    await this.$connect();
  }

  async create(createUserDto: CreateUserDto) {

    const { password: encriptarPass, ...userData } = createUserDto

    try {

      const newUser = await this.user.create({
        data: {
          ...userData,
          password: bycrypt.hashSync(encriptarPass, 10)
        }
      })

      const { password, ...result } = newUser;
      return {
        ...result,
        token: this.getJwToken({id: result.id}) 
      }

    } catch (error) {
      console.log(error);
      this.ManejoDeExceptions(error)


    }
  }



  async loginUser(loginUserDTO: LoginUserDTO) {

    const { password, email } = loginUserDTO;

    const user = await this.user.findUnique({
      where: { email }
    })

    if (!user) throw new UnauthorizedException(`Credenciales no validas (email)`);

    if (!bycrypt.compareSync(password, user.password)) throw new UnauthorizedException(`Credenciales no validas (password)`);

      const {password:contra, ...rest} = user;

    return {
      ...rest,
      token: this.getJwToken({id: user.id})
    }

  }


  private getJwToken( payload: JwtPayload){
      const token = this.jwtService.sign(payload);
      return token;
  }



  async checkAuthStatus(user:User){
    return{
      ...user,
      token: this.getJwToken({id: user.id})
    }
  }



  private ManejoDeExceptions(error: any) {


    if (error.code === 'P2002') {

      throw new BadRequestException(`El Email ya existe en la base de datos`);
    }



    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

}
