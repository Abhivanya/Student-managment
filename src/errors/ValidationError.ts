import { ApiError } from "next/dist/server/api-utils";

export class ValidationError extends ApiError {
  constructor(message: string = "validation Failed") {
    super(400, message);
  }
}
