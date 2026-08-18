import type { Experiment } from "@/types/experiment";
import { gptVsClaudeDocumentAnalysis } from "./gpt-vs-claude-document-analysis";

/**
 * 内容与展示层分离：新增实验只需在此数组中添加条目，
 * 列表页、详情页、首页预览都会自动感知。
 */
const experiments: Experiment[] = [gptVsClaudeDocumentAnalysis];

function byPublishedAtDesc(a: Experiment, b: Experiment): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}

export function getAllExperiments(): Experiment[] {
  return [...experiments].sort(byPublishedAtDesc);
}

export function getFeaturedExperiments(): Experiment[] {
  return getAllExperiments().filter((item) => item.featured);
}

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((item) => item.slug === slug);
}
