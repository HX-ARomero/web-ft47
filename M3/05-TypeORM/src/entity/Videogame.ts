import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Character } from "./Character";

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

  //* Atributo que indica a qué plataforma pertenece
  @Column()
  platformId: number;

  //* Atributo que el id del personaje principal
  @Column()
  characterId: number;

  //* Videogame N:1  Platform  => @ManyToOne
  @ManyToOne(() => Platform, (platform => platform.videogame))
  @JoinColumn({ name: 'platformId'})
  platform: Platform

  //* Videogame N:N Genre
  @ManyToMany((type) => Genre)
	@JoinTable({name: "VIDEOGAMES_GENRES"})
	genres: Genre[];

  //* Videogame 1:1 Character
  @OneToOne((type) => Character)
	@JoinColumn({name: "characterId"})
	character: Character;
}
