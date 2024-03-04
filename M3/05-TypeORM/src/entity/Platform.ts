import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videogame } from "./Videogame";

//! Platform  1:N  Videogame => @OneToMany
//* Videogame N:1  Platform  => @ManyToOne

@Entity({
  name: 'PLATFORMS'
})
export class Platform {

  //* ENTITY LISTENER
  @BeforeInsert()
  transformTitle() {
    this.name = this.name.toLowerCase();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string

  @OneToMany(() => Videogame, (videogame) => videogame.platform)
  videogame: Videogame[]
}
//* Playstation 1 = [ {2}, {3}, {5}, {6}, ... ]