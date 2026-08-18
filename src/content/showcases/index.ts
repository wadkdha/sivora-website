import type { ShowcaseCase } from "@/types/showcase";
import { aiKnowledgeAssistant } from "./ai-knowledge-assistant";

/**
 * 案例内容与展示层分离：新增案例只需在此数组中添加条目，
 * 列表页、详情页、首页预览都会自动感知。
 */
export const showcases: ShowcaseCase[] = [aiKnowledgeAssistant];

export function getAllShowcases(): ShowcaseCase[] {
  return showcases;
}

export function getFeaturedShowcases(): ShowcaseCase[] {
  return showcases.filter((item) => item.featured);
}

export function getShowcaseBySlug(slug: string): ShowcaseCase | undefined {
  return showcases.find((item) => item.slug === slug);
}
