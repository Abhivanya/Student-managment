import { NextRequest, NextResponse } from "next/server";
import { AppError } from "@/shared/errors/AppError";

type AsyncHandler<T extends unknown[] = []> = (
  request: NextRequest,
  ...args: T
) => Promise<Response | NextResponse>;

export function asyncHandler<T extends unknown[]>(handler: AsyncHandler<T>) {
  return async (
    request: NextRequest,
    ...args: T
  ): Promise<Response | NextResponse> => {
    try {
      return await handler(request, ...args);
    } catch (error) {
      if (error instanceof AppError) {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          {
            status: error.statusCode,
          },
        );
      }

      console.error(error);

      return Response.json(
        {
          success: false,
          message: "Internal Server Error",
        },
        {
          status: 500,
        },
      );
    }
  };
}
