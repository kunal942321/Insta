import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column('text', { array:true, nullable:true })
    media: string[];

    @ManyToOne(()=> User, (user)=>user.posts)
    user:User
}