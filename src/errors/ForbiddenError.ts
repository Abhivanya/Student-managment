import { ApiError } from "next/dist/server/api-utils";

export class ForbiddenError extends ApiError {
  constructor(message: string = "Forbidden") {
    super(403, message);
  }
}
