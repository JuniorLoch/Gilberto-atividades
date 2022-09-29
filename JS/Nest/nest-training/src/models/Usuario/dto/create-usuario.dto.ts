import { IsBoolean, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsBoolean()
    readonly ativo: boolean;

    @IsString()
    readonly nome: string;

    @IsString()
    readonly email: string;

    @IsPhoneNumber('BR')
    readonly telefone: string;
}
