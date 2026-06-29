import { AppError } from "./AppError";

export class ValidationError extends AppError {
  constructor(message: string = "validation Failed") {
    super(message, 400);
  }
}
