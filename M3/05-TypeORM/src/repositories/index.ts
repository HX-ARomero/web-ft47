import { AppDataSource } from "../data-source";
import { Character } from "../entity/Character";
import { Genre } from "../entity/Genre";
import { Platform } from "../entity/Platform";
import { Videogame } from "../entity/Videogame";

export const videogameRepository = AppDataSource.getRepository(Videogame)
  .extend({
    findByTitle(title: string) {
      return this.createQueryBuilder('videogame')
        .where('videogame.title = :title', { title })
        .getOne()
    }
  })

export const platformRepository = AppDataSource.getRepository(Platform);
export const genreRepository = AppDataSource.getRepository(Genre);
export const characterRepository = AppDataSource.getRepository(Character);