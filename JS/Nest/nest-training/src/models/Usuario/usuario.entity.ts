import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pessoa')
class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ativo: boolean;

    @Column()
    nome: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    telefone: string;
}

export default Usuario;
