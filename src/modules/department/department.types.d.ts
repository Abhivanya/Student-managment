export type GetDepartmentsQueryType = {
  page: number;
  limit: number;
  search?: string;
  sort: "name" | "createdAt";
};

// Options for finding departments repostiory function type
export type FindDepartmentsOptions = {
  skip: number;
  take: number;
  search?: string;
  sort: "name" | "createdAt";
};
