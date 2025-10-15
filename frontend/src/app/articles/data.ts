export interface Article {
  slug: string;
  category: string;
  title: string;
  owner: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "ai-scheduler",
    category: "智能工具",
    title: "智能日程助手",
    owner: "产品体验团队",
    content:
      "利用自然语言快速创建日程安排，自动识别会议主题、参与者以及提醒时间，帮助你掌控繁忙的一天。",
  },
  {
    slug: "collab-whiteboard",
    category: "团队协作",
    title: "实时协同白板",
    owner: "协同平台组",
    content:
      "在一个共享画布上与队友同步绘制、评论和整理灵感，将头脑风暴过程沉淀成清晰的行动计划。",
  },
  {
    slug: "insights-dashboard",
    category: "可视化分析",
    title: "数据洞察仪表盘",
    owner: "数据智能团队",
    content:
      "通过交互式图表实时追踪核心指标，自动生成洞察报告，让决策建立在可靠的数据基础之上。",
  },
];
