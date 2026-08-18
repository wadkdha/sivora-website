import type { Experiment } from "@/types/experiment";

/**
 * 结构 Demo：用于展示实验的记录框架，不是已完成的严谨 benchmark。
 * 不包含任何编造的模型评分或胜负结论。
 */
export const gptVsClaudeDocumentAnalysis: Experiment = {
  slug: "gpt-vs-claude-document-analysis",
  title: "GPT vs Claude：企业文档分析能力对比",
  summary:
    "研究当 AI 需要阅读、理解并整理较长业务文档时，GPT 与 Claude 分别适合承担什么任务。",

  category: "文档理解与分析",
  tags: ["文档分析", "长上下文", "模型对比"],

  models: ["GPT", "Claude"],

  featured: true,
  status: "demo",
  publishedAt: "2026-08-18",

  question: {
    title: "什么任务应该优先使用哪个模型？",
    description:
      "当企业需要让 AI 阅读、理解并整理较长的业务文档时，GPT 和 Claude 在实际工作流中分别适合承担什么任务？",
  },

  whyItMatters: {
    description:
      "企业常见场景包括制度文件理解、产品资料整理、合同内容分析、企业报告摘要、多份资料综合分析。企业真正需要解决的问题不是「哪个模型更强」，而是「什么任务应该优先使用哪个模型」。",
  },

  setup: {
    task: "让模型处理一组企业文档，并完成：提取关键事实、识别重要条款、生成结构化摘要、回答跨文档问题、输出行动建议。",
    inputDescription:
      "多份典型企业文档（如制度手册、产品说明、合同片段）。文档数量与长度尚未统一，当前实验设计阶段仅明确任务类型。",
    evaluationCriteria: [
      "信息完整度",
      "指令遵循",
      "结构化能力",
      "长上下文稳定性",
      "可读性",
      "事实一致性",
      "二次修改成本",
    ],
  },

  approach: {
    description:
      "本阶段先搭建实验框架与统一评价标准，尚未执行统一输入、统一任务的正式测试。",
    steps: [
      "整理任务清单：提取关键事实、识别重要条款、生成结构化摘要、回答跨文档问题、输出行动建议",
      "确定评价维度：信息完整度、指令遵循、结构化能力、长上下文稳定性、可读性、事实一致性、二次修改成本",
      "设计统一输入文档集与统一任务指令，确保 GPT 与 Claude 在相同条件下测试",
      "后续基于该框架执行正式测试并记录结论",
    ],
  },

  findings: {
    summary:
      "当前页面用于展示实验框架。正式结论将在完成统一输入、统一任务和统一评价标准的实测后更新。",
    points: [
      "本实验目前处于框架搭建阶段，尚未执行正式测试",
      "不包含任何模型准确率、胜出比例或量化评分",
      "测试完成后，本区域将替换为基于实际结果的发现",
    ],
  },

  comparison: {
    enabled: true,
    dimensions: [
      { name: "信息整理", gpt: "待实测", claude: "待实测" },
      { name: "长文档理解", gpt: "待实测", claude: "待实测" },
      { name: "结构化输出", gpt: "待实测", claude: "待实测" },
    ],
  },
};
