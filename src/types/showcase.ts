/**
 * Showcase 案例的数据模型。
 *
 * 详情结构固定为五段式：
 * 企业问题 → 原人工流程 → AI Workflow → Intelligence Layer → 预期价值
 *
 * 命名说明：使用 `intelligenceLayer` 而非 `aiRole`，是为了不把结构绑定在
 * 某一个具体模型上——`models` 是数组，可以是 GPT、Claude、两者同时，
 * 或未来加入的其他模型。
 */

/** 模型名不做枚举限制，允许未来接入训练数据之外的新模型。 */
export type AIModelName = "GPT" | "Claude" | (string & {});

export interface ShowcaseMetric {
  label: string;
  value: string;
  /**
   * "estimated"：模拟测算，Demo / 模拟案例只能使用这一类型。
   * "observed"：真实项目且有实际数据依据时才可使用。
   */
  type: "estimated" | "observed";
}

export interface ShowcaseProblem {
  description: string;
  /** 可选：问题带来的可感知代价，如耗时、频率，非承诺性数据。 */
  metrics?: string;
}

export interface ShowcaseManualProcess {
  description: string;
  steps: string[];
}

export interface ShowcaseAIWorkflow {
  description: string;
  steps: string[];
}

export interface ShowcaseIntelligenceLayer {
  models: AIModelName[];
  description: string;
  capabilities: string[];
}

export interface ShowcaseResult {
  description: string;
  metrics: ShowcaseMetric[];
}

export interface ShowcaseCase {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  tags: string[];
  featured: boolean;
  /** 暂无真实素材时留空，由展示层渲染抽象占位视觉。 */
  coverImage?: string;
  /**
   * 是否为 Demo / 模拟场景，而非真实客户项目。
   * 为 true 时，展示层必须明确标注 "Demo"，不得包装成真实案例。
   */
  isDemo: boolean;

  problem: ShowcaseProblem;
  manualProcess: ShowcaseManualProcess;
  aiWorkflow: ShowcaseAIWorkflow;
  intelligenceLayer: ShowcaseIntelligenceLayer;
  result: ShowcaseResult;
}
