import type { GenreID, TMovie } from '~/types/movie.types'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    data: [] as TMovie[],
    loading: false,
    error: '',
    selectedGenres: [] as GenreID[],
    searchQuery: ''
  })
})
