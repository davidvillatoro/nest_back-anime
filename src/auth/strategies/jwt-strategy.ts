import { PassportStrategy } from "@nestjs/passport";
import { User } from "generated/prisma";

import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { PrismaService } from "src/share/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


    constructor(
        private readonly prismaService: PrismaService,
        configService: ConfigService,

    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload): Promise<User> {

        const { id } = payload;
        const usuario = await this.prismaService.user.findUnique({ where: { id } })

        if (!usuario) {
            throw new UnauthorizedException('Token no valido')
        }

        if (!usuario.isActive) {
            throw new UnauthorizedException('usuario es Inactivo')
        }

        return usuario;
    }

}