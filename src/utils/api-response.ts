export function successResponse<T>(
  data: T,
  message: string = "Success",
  statusCode: number = 200,
) {
  return Response.json(
    {
      success: true,
      message,
      data,
    },
    { status: statusCode },
  );
}
