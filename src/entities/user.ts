import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    active: boolean

    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAd: Date 

}