# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## POST "/platforms"

```json
{
	"name": "PS1"
}
```

## POST "/genres"
- Postear de a uno:
```json
{
	"name": "Action"
}

{
	"name": "Adventure"
}
```

## POST "/characters"

```json
{
  "name": "Mario Bross"
}
```

## POST "/"

```json
{
  "title": "Super Mario 1",
  "description": "Juego de plataforma",
  "releaseDate": "1985 01 01",
  "rating": 8,
  "price": 30,
  "platform": 1,
  "genres": [1, 2],
  "character": 1
}
```
