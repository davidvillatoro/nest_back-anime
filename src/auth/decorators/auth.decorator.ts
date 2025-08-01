
import { applyDecorators, UseGuards } from '@nestjs/common';

import { RoleProtected } from './role-protected/role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role/user-role.guard';
import { ValidRoles } from '../interfaces/validRoles';

export function Auth(roles?: ValidRoles) {

  return applyDecorators(
    RoleProtected(roles),
    UseGuards(AuthGuard(), UserRoleGuard ),
    
  );
}
