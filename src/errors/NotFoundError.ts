import { ApiError } from "next/dist/server/api-utils";

export class NotFoundError extends ApiError {
  constructor(messsage: string = "Not found") {
    super(404, messsage);
  }
}
