import { Request, Response } from 'express';
import { Videogame } from '../../entity/Videogame';
import { AppDataSource } from '../../data-source';
import { Platform } from '../../entity/Platform';
import { Genre } from '../../entity/Genre';
import { In } from 'typeorm';
import { Character } from '../../entity/Character';
//* REPOSITORIOS
import {
  characterRepository,
  genreRepository,
  platformRepository,
  videogameRepository,
} from '../../repositories';

//* RUTAS "/"
export const getController = async (request: Request, response: Response) => {
  try {

    const { title } = request.query;
    if(title) {
      const foundVideogame = await videogameRepository.findByTitle(title);
      return response.status(200).json(foundVideogame);
     }

    const allVideogames = await videogameRepository.find({
      relations: { platform: true, genres: true },
    });
    return response.status(200).json(allVideogames);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

//* Transacción: EJEMPLO
//* Depositar $100
//*     1. Verificar que haya $100 en la cuenta de origen => BBDD
//*     2. Verifico que exista la cuenta destino          => BBDD
//*     3. Descontar $100 de la cuenta de origen          => BBDD
//*     4. Agregar $100 en la cuenta de destino           => X BBDD
export const postController = async (request: Request, response: Response) => {
  const {
    title,
    description,
    releaseDate,
    rating,
    price,
    platform,
    genres,
    character,
  } = request.body;

  const videogameTransaction = await AppDataSource.manager.transaction(
    'REPEATABLE READ',
    async (transactionalEntityManager) => {
      try {
        const newVideogame = new Videogame();
        //* Buscamos los géneros enviados por body en la tabla "GENRES"
        const genresArray = await genreRepository.findBy({
          id: In(genres),
        });
        newVideogame.title = title;
        newVideogame.description = description;
        newVideogame.releaseDate = releaseDate;
        newVideogame.rating = rating;
        newVideogame.price = price;
        //* Atributo que indica a qué plataforma pertenece
        newVideogame.platformId = platform;
        //* Atributo que indica qué géneros posee
        newVideogame.genres = genresArray;
        //* Atributo que indica cuál es su Personaje principal
        newVideogame.characterId = character;

        const result = await transactionalEntityManager
          .createQueryBuilder()
          .select('MAX(videogame.inventory)', 'inventory')
          .from(Videogame, 'videogame')
          .getRawOne();
        newVideogame.inventory =
          result.inventory < 100 ? 100 : result.inventory + 2;

        const savedVideogame = await videogameRepository.save(newVideogame);

        return savedVideogame;
      } catch (error) {
        response.status(500).send(error.message);
      }
    }
  );

  response.status(200).json(videogameTransaction);
};

export const putController = (request: Request, response: Response) => {};

export const deleteController = (request: Request, response: Response) => {};

//* RUTAS "/platforms"
export const postPlatformController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  try {
    const platform = new Platform();
    platform.name = name;
  
    const savedPlatform = await platformRepository.save(platform);
    response.status(201).send(savedPlatform);
  } catch (error: any) {
    response.status(500).send(error.message);
  }

};

//* RUTAS "/genres"
export const postGenreController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  const genre = new Genre();
  genre.name = name;

  const savedGenre = await genreRepository.save(genre);
  response.status(201).send(savedGenre);
};

//* RUTAS "/characters"
export const postCharacterController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  const character = new Character();
  character.name = name;

  const savedCharacter = await characterRepository.save(character);
  response.status(201).send(savedCharacter);
};
