export type GenreID = 0 | 1 | 2 | 3 | 4 | 5

export type TMovie = {
  id: number
  name: string
  description: string
  genre: GenreID
  image: string
  additional: string
}
