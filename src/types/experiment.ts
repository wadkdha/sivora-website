/**
 * AI Lab 实验的数据模型。
 *
 * Lab 与 Showcase 是两套独立的数据模型：Showcase 面向商业结果，
 * Lab 面向技术探索与模型选型判断，因此不复用 Showcase 的类型定义。
 *
 * 详情结构（部分为可选，取决于实验是否已有对应内容）：
 * Research Question → Why It Matters → Setup → Approach
 * → Comparison（可选）→ Findings（可选）→ Recommendation（可选）
 */

export type ExperimentStatus = "demo" | "completed";

/** 只列出真实存在的模型，不设计 "Both" 这类组合值——多模型直接用数组表达。 */
export type ExperimentModel = "GPT" | "Claude";

export interface ExperimentQuestion {
  title: string;
  description: string;
}

export interface ExperimentWhyItMatters {
  description: string;
}

export interface ExperimentSetup {
  task: string;
  inputDescription: string;
  evaluationCriteria: string[];
}

export interface ExperimentApproach {
  description: string;
  steps: string[];
}

export interface ExperimentFindings {
  summary: string;
  points: string[];
}

export interface ExperimentRecommendation {
  summary: string;
  bestFor: string[];
  limitations?: string[];
}

export interface ExperimentComparisonDimension {
  name: string;
  gpt?: string;
  claude?: string;
}

export interface ExperimentComparison {
  enabled: boolean;
  dimensions: ExperimentComparisonDimension[];
  conclusion?: string;
}

export interface ExperimentDemoMedia {
  type: "image" | "gif" | "video";
  src: string;
}

export interface Experiment {
  slug: string;
  title: string;
  summary: string;

  category: string;
  tags: string[];

  models: ExperimentModel[];

  featured: boolean;
  status: ExperimentStatus;
  /** ISO 日期字符串，如 "2026-08-18"，用于排序与展示。 */
  publishedAt: string;

  question: ExperimentQuestion;
  whyItMatters: ExperimentWhyItMatters;
  setup: ExperimentSetup;
  approach: ExperimentApproach;

  /** 未完成正式测试前可以缺省；Demo 实验应说明"当前没有正式实测结论"。 */
  findings?: ExperimentFindings;
  /** 只有在有数据支撑时才提供，避免在没有结论前给出使用建议。 */
  recommendation?: ExperimentRecommendation;
  comparison?: ExperimentComparison;
  demoMedia?: ExperimentDemoMedia;
}
