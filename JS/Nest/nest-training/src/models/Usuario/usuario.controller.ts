import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('rest/usuario')
export class UsuarioController {
    constructor(private service: UsuarioService) {}
}
