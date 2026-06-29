import { ApiError } from "next/dist/server/api-utils";

export class UnauthorizedError extends ApiError {
  constructor(message: string = "Unauthorized") {
    super(401, message);
  }
}
