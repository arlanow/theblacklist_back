import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Unique('unique_title', ['title'])
  title!: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  type!: number;

  @Column({ nullable: true })
  iconId?: number;
}
