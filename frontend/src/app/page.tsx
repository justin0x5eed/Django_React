"use client";


import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";

const demoCards = [
  {
    title: "智能日程助手",
    subtitle: "智能工具",
    description:
      "利用自然语言快速创建日程安排，自动识别会议主题、参与者以及提醒时间，帮助你掌控繁忙的一天。",
    cta: "了解详情",
  },
  {
    title: "实时协同白板",
    subtitle: "团队协作",
    description:
      "在一个共享画布上与队友同步绘制、评论和整理灵感，将头脑风暴过程沉淀成清晰的行动计划。",
    cta: "开始协作",
  },
  {
    title: "数据洞察仪表盘",
    subtitle: "可视化分析",
    description:
      "通过交互式图表实时追踪核心指标，自动生成洞察报告，让决策建立在可靠的数据基础之上。",
    cta: "查看报告",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-16">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <header className="space-y-3">
          <p className="text-small text-default-500">HeroUI 组件演示</p>
          <h1 className="text-3xl font-semibold">精选功能卡片</h1>
          <p className="text-base text-default-600">
            以下示例展示了 HeroUI Card 组件的基础布局和配色，用于快速构建产品功能介绍。
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {demoCards.map((card) => (
            <Card key={card.title} className="h-full">
              <CardHeader className="flex flex-col items-start gap-1">
                <span className="text-tiny uppercase tracking-wide text-default-400">
                  {card.subtitle}
                </span>
                <h2 className="text-large font-semibold text-foreground">
                  {card.title}
                </h2>
              </CardHeader>
              <CardBody>
                <p className="text-small leading-relaxed text-default-600">
                  {card.description}
                </p>
              </CardBody>
              <CardFooter>
                <Button color="primary" variant="flat">
                  {card.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
