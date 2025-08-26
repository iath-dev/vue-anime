// Base types
export interface ImageFormat {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

export interface Images {
  jpg: ImageFormat;
  webp?: ImageFormat;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  items?: {
    count: number;
    total: number;
    per_page: number;
  };
}
