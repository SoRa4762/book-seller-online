export type paramsType = {
  params: { mangaId?: number; genre?: string; title?: string };
};

export type pagination = {
  totalPages: number;
  currentPage: number;
};

export type seeMore = {
  expand: Boolean;
  setExpand: Boolean;
  content: string;
};
