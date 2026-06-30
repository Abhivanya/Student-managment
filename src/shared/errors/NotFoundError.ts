import { AppError } from "./AppError";

export class NotFoundError extends AppError {
  constructor(messsage: string = "Not found") {
    super(messsage, 404);
  }
}
