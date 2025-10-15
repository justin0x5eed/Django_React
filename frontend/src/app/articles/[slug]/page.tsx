import {notFound} from "next/navigation";

import {articles} from "../data";
import ArticleDetailContent from "./ArticleDetailContent";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleDetailPage({params}: ArticlePageProps) {
  const {slug} = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailContent article={article} />;
}
