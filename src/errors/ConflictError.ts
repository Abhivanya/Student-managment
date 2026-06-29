import { AppError } from "./AppError";

export class ConflictError extends AppError {
  constructor(message: string = "Conflict Error") {
    super(message, 409);
  }
}
