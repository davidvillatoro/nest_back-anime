import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";



export const RawHeadersD = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();

        return req.RawHeadersD
    }
);