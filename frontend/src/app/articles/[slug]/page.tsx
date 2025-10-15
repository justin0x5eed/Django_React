import {notFound} from "next/navigation";

import {articles} from "../data";
import ArticleDetailContent from "./ArticleDetailContent";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({params}: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailContent article={article} />;
}
