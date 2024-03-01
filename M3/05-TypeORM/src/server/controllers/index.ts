import {Request, Response} from "express";
import { Videogame } from "../../entity/Videogame";
import { AppDataSource } from "../../data-source";
import { Platform } from "../../entity/Platform";

export const getController = async (request: Request, response: Response) => {
  try {
    //* Invoco Servicio
    const allVideogames = await AppDataSource.manager.find(Videogame);
    response.status(200).json(allVideogames);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export const postController = async (request: Request, response: Response) => {
  const { title, description, releaseDate, rating, price, platform } = request.body;
  const newVideogame = new Videogame();
  newVideogame.title = title;
  newVideogame.description = description;
  newVideogame.releaseDate = releaseDate;
  newVideogame.rating = rating;
  newVideogame.price = price;
  newVideogame.platform = platform;

  const savedVideogame = await AppDataSource.manager.save(newVideogame); //* { }
  response.status(200).json(savedVideogame);
};

export const putController = (request: Request, response: Response) => {};

export const deleteController = (request: Request, response: Response) => {};

export const postPlatformController = async (
	request: Request, response: Response
) => {
	const {name} = request.body;
	const platform = new Platform();
	platform.name = name;
	
	const savedPlatform = await AppDataSource.manager.save(platform);
	response.status(201).send(savedPlatform);
};