import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'GENRES',
})
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
