export const apiConfig = () => {
  const config = useRuntimeConfig()

  return {
    apiBaseUrl: config.public.apiBaseUrl as string,
    endpoints: {
      movies: '/movies',
      movieShows: '/movieShows',
      showPlaces: '/showPlaces',
      bookPlace: '/bookPlace'
    }
  }
}
