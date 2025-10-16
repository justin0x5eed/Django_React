import {notFound} from "next/navigation";

import {getArticlesEndpoint} from "../api";
import {Article} from "../types";
import ArticleDetailContent from "./ArticleDetailContent";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleDetailPage({params}: ArticlePageProps) {
  const {slug} = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailContent article={article} />;
}

async function fetchArticleBySlug(slug: string): Promise<Article | undefined> {
  const endpoint = new URL(getArticlesEndpoint());
  endpoint.searchParams.set("slug", slug);

  const response = await fetch(endpoint.toString(), {cache: "no-store"});

  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status}`);
  }

  const data: Article[] = await response.json();
  return data.find((item) => item.slug === slug);
}
