import type { ApiResponse } from '~/types/api.types'
import type { TMovie } from '~/types/movie.types'
import { apiConfig } from '~/services/config'

export const movieService = {
  async getAll(): Promise<ApiResponse<TMovie[]>> {
    const { apiBaseUrl, endpoints } = apiConfig()

    const response = await $fetch<string>(endpoints.movies, {
      baseURL: apiBaseUrl
    })

    return JSON.parse(response) as ApiResponse<TMovie[]>
  },

  async searchMovies(params?: {
    movie_id?: number
    name?: string
    genres?: number[]
  }): Promise<ApiResponse<TMovie[]>> {
    const { apiBaseUrl, endpoints } = apiConfig()

    const response = await $fetch<string>(endpoints.movies, {
      baseURL: apiBaseUrl,
      params
    })

    return JSON.parse(response) as ApiResponse<TMovie[]>
  }
}
