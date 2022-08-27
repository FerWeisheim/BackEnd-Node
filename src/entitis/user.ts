
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,BaseEntity} from 'typeorm'

@Entity()
export class User extends BaseEntity{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombre: string
    
    @Column()
    email: string
    
    @Column()      
    username : string
    
    @Column()
    password : string

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAd:Date;

}