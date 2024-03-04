import { Request, Response } from 'express';
import { Videogame } from '../../entity/Videogame';
import { AppDataSource } from '../../data-source';
import { Platform } from '../../entity/Platform';
import { Genre } from '../../entity/Genre';
import { In } from 'typeorm';
import { Character } from '../../entity/Character';

//* RUTAS "/"
export const getController = async (request: Request, response: Response) => {
  try {
    const allVideogames = await AppDataSource.manager.find(Videogame, {
      relations: { platform: true, genres: true },
    });
    response.status(200).json(allVideogames);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

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
  const newVideogame = new Videogame();
  //* Buscamos los géneros enviados por body en la tabla "GENRES"
  const genresArray = await AppDataSource.manager.findBy(Genre, {
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

  const savedVideogame = await AppDataSource.manager.save(newVideogame); //* { }
  response.status(200).json(savedVideogame);
};

export const putController = (request: Request, response: Response) => {};

export const deleteController = (request: Request, response: Response) => {};

//* RUTAS "/platforms"
export const postPlatformController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  const platform = new Platform();
  platform.name = name;

  const savedPlatform = await AppDataSource.manager.save(platform);
  response.status(201).send(savedPlatform);
};

//* RUTAS "/genres"
export const postGenreController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  const genre = new Genre();
  genre.name = name;

  const savedGenre = await AppDataSource.manager.save(genre);
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

  const savedCharacter = await AppDataSource.manager.save(character);
  response.status(201).send(savedCharacter);
};
