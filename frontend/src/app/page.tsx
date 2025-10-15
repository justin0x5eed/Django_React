"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <section className="text-center">
        <h1 className="text-4xl font-semibold text-foreground">欢迎来到文章中心</h1>
        <p className="mt-4 text-base text-default-600">
          探索我们的精选内容，请访问文章列表页查看最新文章。
        </p>
      </section>
    </main>
  );
}
