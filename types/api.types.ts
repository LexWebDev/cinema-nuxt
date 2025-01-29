export interface ApiResponse<T = any> {
  error_code: number
  error_message: string
  data: T
}
