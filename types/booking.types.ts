export type TMovieSession = {
  showdate: string
  daytime: string
}

export type TSeat = {
  seat: number
  is_free: boolean
}

export type TRow = {
  row: number
}

export type TPlaceRow = [TRow, TSeat[]]

export type TPlace = TPlaceRow[]

export type TBookingRequest = {
  movie_id: number
  row: number
  seat: number
  showdate: string
  daytime: string
}

export type TBookingResponse = {
  movie_id: string
  row: string
  seat: string
  showdate: string
  daytime: string
  ticketkey: string
}
