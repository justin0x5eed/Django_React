export interface ArticleCategory {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  owner: string;
  content: string;
  category: ArticleCategory;
  created_at: string;
  updated_at: string;
}
