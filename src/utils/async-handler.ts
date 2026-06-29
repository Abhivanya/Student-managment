import { AppError } from "@/errors/AppError";

export function asyncHandler(handler: (request: Request) => Promise<Response>) {
  return async (request: Request) => {
    try {
      await handler(request);
    } catch (error) {
      if (error instanceof AppError) {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          { status: error.statusCode },
        );
      }

      console.error(error);

      return Response.json(
        {
          success: false,
          message: "Internal Server Error",
        },
        { status: 500 },
      );
    }
  };
}
