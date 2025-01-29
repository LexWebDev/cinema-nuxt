import type { ApiResponse } from '~/types/api.types'
import type {
  TBookingRequest,
  TBookingResponse,
  TMovieSession,
  TPlace
} from '~/types/booking.types'
import { apiConfig } from '~/services/config'

export const bookingService = {
  async getMovieSessions(
    movieId: number
  ): Promise<ApiResponse<TMovieSession[]>> {
    const { apiBaseUrl, endpoints } = apiConfig()

    const response = await $fetch<string>(endpoints.movieShows, {
      baseURL: apiBaseUrl,
      params: {
        movie_id: movieId
      }
    })

    const parsedResponse = JSON.parse(response)
    return {
      error_code: parsedResponse.error_code,
      error_message: parsedResponse.error_message,
      data: parsedResponse.data[movieId] || []
    } as ApiResponse<TMovieSession[]>
  },

  async getShowPlaces(params: {
    movie_id: number
    showdate: string
    daytime: string
  }): Promise<ApiResponse<TPlace>> {
    const { apiBaseUrl, endpoints } = apiConfig()

    const response = await $fetch<string>(endpoints.showPlaces, {
      baseURL: apiBaseUrl,
      params
    })

    return JSON.parse(response) as ApiResponse<TPlace>
  },

  async bookPlace(
    booking: TBookingRequest
  ): Promise<ApiResponse<TBookingResponse>> {
    const { apiBaseUrl, endpoints } = apiConfig()

    const response = await $fetch<string>(endpoints.bookPlace, {
      baseURL: apiBaseUrl,
      method: 'POST',
      body: booking
    })

    return JSON.parse(response) as ApiResponse<TBookingResponse>
  }
}
