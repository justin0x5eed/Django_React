"use client";

import Link from "next/link";
import {Button, Card, CardBody, CardHeader} from "@heroui/react";

import {Article} from "../data";

interface ArticleDetailContentProps {
  article: Article;
}

export default function ArticleDetailContent({article}: ArticleDetailContentProps) {
  return (
    <main className="min-h-screen bg-background py-12">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
        <div>
          <Button
            as={Link}
            href="/"
            variant="light"
            className="px-0 text-small text-default-500 hover:text-foreground"
          >
            ← 返回文章列表页
          </Button>
        </div>
        <Card>
          <CardHeader className="flex flex-col items-start gap-1">
            <span className="text-tiny uppercase tracking-wide text-default-400">
              {article.category}
            </span>
            <h1 className="text-2xl font-semibold text-foreground">{article.title}</h1>
          </CardHeader>
          <CardBody className="space-y-3 text-default-600">
            <p>
              <span className="font-medium text-default-500">Owner：</span>
              {article.owner}
            </p>
            <p>
              <span className="font-medium text-default-500">正文：</span>
              {article.content}
            </p>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
