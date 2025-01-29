import type { GenreID } from '~/types/movie.types'
import { movieService } from '~/services/api/movie.service'
import { GENRES_MAP } from '~/constants/genres'

export const useMovies = () => {
  const store = useMoviesStore()
  const {
    data: movies,
    loading,
    error,
    selectedGenres,
    searchQuery
  } = storeToRefs(store)

  const fetchMovies = async () => {
    try {
      loading.value = true
      const response = await movieService.searchMovies({
        name: searchQuery.value || undefined,
        genres: selectedGenres.value.length ? selectedGenres.value : undefined
      })
      movies.value = response.data || []
    } catch (e) {
      error.value = 'Failed to load movies'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const genres = Object.entries(GENRES_MAP).map(([id, name]) => ({
    id: Number(id) as GenreID,
    name
  }))

  return {
    movies,
    loading,
    error,
    selectedGenres,
    searchQuery,
    genres,
    fetchMovies
  }
}
