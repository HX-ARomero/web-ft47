import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Platform } from "./Platform";

@Entity({
  //* Nombre de la Tabla
  name: 'VIDEOGAMES'
})

export class Videogame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: "text"})
  description: string;

  @Column()
  price: number;

  @Column({ default: 3 })
  rating: number;

  @Column()
  releaseDate: Date;

  @Column()
  platformId: number;

  //* Platform  1:N  Videogame => @OneToMany
  //! Videogame N:1  Platform  => @ManyToOne
  @ManyToOne(() => Platform, (platform => platform.videogame))
  @JoinColumn({ name: 'platformId'})
  platform: Platform
}
//* Super Mario = { Play Station }