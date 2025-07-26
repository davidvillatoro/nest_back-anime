import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'generated/prisma';
import { Observable } from 'rxjs';
import { META_ROLES } from 'src/auth/decorators';

@Injectable()
export class UserRoleGuard implements CanActivate {

  //obtenr la metadata
  constructor(
    private readonly reflector: Reflector
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles: string = this.reflector.get(META_ROLES, context.getHandler());

    if (!validRoles) return true; // para gapinas que no nesesitan roles
    if (validRoles.length === 0) return true; //iguial esta


    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) {
      throw new BadRequestException('usuario no encontrado')
    }

    for (const role of user.role) {
      if (validRoles.includes(role)) {
        return true
      }
    }


    throw new ForbiddenException(
      `usuario ${user.name} no tiene un rol valido ${validRoles}`
    )

  }
}
