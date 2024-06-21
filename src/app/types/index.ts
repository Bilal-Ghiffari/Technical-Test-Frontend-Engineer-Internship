export type CakeType = {
  current_page: number;
  message: string;
  status: string;
  items: CakeColumnType[];
};

export type CakeItemType = {
  id: number;
  title: string;
  description: string;
  rating: number;
  image: string;
  created_at: string;
  updated_at: string;
};

export type CakeColumnType = Omit<CakeItemType, "updated_at" | "description">;

export type ActionResult = {
  title: string | null;
  description: string[] | null;
};
