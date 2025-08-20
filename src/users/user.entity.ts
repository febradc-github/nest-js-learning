import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHERS = 'others'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    firstName: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    lastName: string;

    @Column({
        type: 'enum',
        enum: Gender,
        nullable: false
    })
    gender: Gender;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password: string;
}
