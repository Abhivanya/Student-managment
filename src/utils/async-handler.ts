export function asyncHandler(handler: (request: Request) => Promise<Response>) {
  return async (request: Request) => {
    try {
      await handler(request);
    } catch (error) {
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
