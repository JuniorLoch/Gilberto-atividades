import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly repository: Repository<Usuario>,
    ) {}

    private returnStatus;

    async findAll() {
        const tUsuarios = await this.repository.find();
        if (!tUsuarios) {
            this.returnStatus = 0;
        } else {
            this.returnStatus = 1;
        }

        return { status: this.returnStatus, usuarios: tUsuarios };
    }

    findOne(id: number) {}

    update(id: number) {}

    remove(id: number) {}
}
