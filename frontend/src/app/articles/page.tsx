"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";

import {getArticlesEndpoint} from "./api";
import {Article} from "./types";

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadArticles() {
      try {
        setIsLoading(true);
        const response = await fetch(getArticlesEndpoint(), {cache: "no-store"});

        if (!response.ok) {
          throw new Error(`Failed to load articles: ${response.status}`);
        }

        const data: Article[] = await response.json();
        if (isMounted) {
          setArticles(data);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("无法加载文章列表，请稍后重试。");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-background py-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <header className="space-y-3">
          <p className="text-small text-default-500">Articles 列表</p>
          <h1 className="text-3xl font-semibold">最新文章精选</h1>
          <p className="text-base text-default-600">
            浏览文章列表，了解每篇文章的类别、作者信息及核心内容，点击了解详情可查看完整正文。
          </p>
        </header>

        {isLoading && <p className="text-default-500">正在加载文章…</p>}
        {error && !isLoading && <p className="text-danger">{error}</p>}

        {!isLoading && !error && (
          <>
            {articles.length === 0 ? (
              <p className="text-default-500">暂无文章。</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <Card key={article.slug} className="h-full">
                    <CardHeader className="flex flex-col items-start gap-1">
                      <span className="text-tiny uppercase tracking-wide text-default-400">
                        {article.category?.name ?? ""}
                      </span>
                      <h2 className="text-large font-semibold text-foreground">{article.title}</h2>
                    </CardHeader>
                    <CardBody className="space-y-2 text-small text-default-600">
                      <p>
                        <span className="font-medium text-default-500">Owner：</span>
                        {article.owner}
                      </p>
                      <p>
                        <span className="font-medium text-default-500">正文：</span>
                        {article.content}
                      </p>
                    </CardBody>
                    <CardFooter>
                      <Button as={Link} href={`/articles/${article.slug}`} color="primary" variant="flat">
                        了解详情
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
