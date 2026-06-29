import { ApiError } from "next/dist/server/api-utils";

export class ConflictError extends ApiError {
  constructor(message: string = "Conflict Error") {
    super(409, message);
  }
}
