export interface ApiError {
  httpStatusCode: number;
  httpStatus: string;
  errorMessage: string;
  verboseErrorMessage: string;
}
