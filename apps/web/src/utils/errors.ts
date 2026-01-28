export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: any) => {
  if (error.response) {
    throw new ApiError(
      error.response.status,
      error.response.data.message || 'API Error',
      error.response.data.code
    );
  }
  throw new Error('Network Error');
};