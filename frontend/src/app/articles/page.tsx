"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";

import {getApiBaseUrl, getArticlesEndpoint} from "./api";
import {Article} from "./types";

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiBaseUrl = useMemo(() => getApiBaseUrl(), []);

  useEffect(() => {
    let isMounted = true;

    async function loadArticles() {
      const endpoint = getArticlesEndpoint();
      try {
        setIsLoading(true);
        const response = await fetch(endpoint, {cache: "no-store"});

        if (!response.ok) {
          throw new Error(`Failed to load articles: ${response.status}`);
        }

        const data: Article[] = await response.json();
        if (isMounted) {
          setArticles(data);
        }
      } catch (err) {
        console.error(`Failed to fetch articles from ${endpoint}`, err);
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
        {error && !isLoading && (
          <div className="space-y-2 rounded-large border border-danger-200 bg-danger-50 p-4 text-danger-600">
            <p className="font-semibold">{error}</p>
            <div className="text-sm">
              <p className="font-medium">排查步骤：</p>
              <ol className="mt-1 list-decimal space-y-1 pl-5">
                <li>确认后端服务已在 {apiBaseUrl} 正常运行（如使用 <code>python manage.py runserver 8006</code>）。</li>
                <li>若后端端口不同，请在 <code>.env.local</code> 中设置 <code>NEXT_PUBLIC_API_BASE_URL</code> 指向实际地址。</li>
                <li>打开浏览器开发者工具，查看 Network 面板中 <code>api/articles/</code> 请求的状态码与错误详情。</li>
              </ol>
            </div>
          </div>
        )}

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
