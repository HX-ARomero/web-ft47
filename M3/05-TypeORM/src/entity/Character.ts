import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'CHARACTERS',
})
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
