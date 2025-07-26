import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";



export const GetUserD = createParamDecorator(
    (data: string, ctx:ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        const user = req.user;

        
        const { password, ...restUser} = user

        if (!user) {
            throw new InternalServerErrorException('user no viene en la (request)')
        }

        return (!data) ? restUser : user[data];
    }
);