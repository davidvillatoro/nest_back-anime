import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDTO } from './dto';
import { Auth } from './decorators/auth.decorator';
import { ValidRoles } from './interfaces/validRoles';
import { GetUserD } from './decorators';
import { User } from 'generated/prisma';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }


  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.loginUser(loginUserDTO)
  }



  @Get('check-auth-status')
  @Auth() 
  checkAuthStatus(
    @GetUserD() user: User
  ){
    return  this.authService.checkAuthStatus( user)
  }

  @Get('private')
  @Auth(ValidRoles.ADMIN) 
  testigPrivateRoute(
    @GetUserD() user: User
  ){
    return {
      ok: true,
      user
    }
  }


}
