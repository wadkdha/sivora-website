import type { ShowcaseAIWorkflow, ShowcaseManualProcess } from "@/types/showcase";

type ProcessComparisonProps =
  | { variant: "manual"; data: ShowcaseManualProcess }
  | { variant: "ai"; data: ShowcaseAIWorkflow };

/**
 * "原人工流程" 与 "AI Workflow" 共用同一个组件、相反的视觉处理：
 * 人工流程用灰底弱化，AI Workflow 用强调色边框突出，
 * 在相邻的时间轴节点上形成明显对比。
 */
export function ProcessComparison({ variant, data }: ProcessComparisonProps) {
  const isAI = variant === "ai";

  return (
    <div
      className={
        isAI
          ? "rounded-2xl border border-accent/30 bg-surface p-6"
          : "rounded-2xl border border-border bg-surface-muted p-6"
      }
    >
      <p
        className={
          isAI
            ? "text-sm leading-relaxed"
            : "text-sm leading-relaxed text-muted"
        }
      >
        {data.description}
      </p>
      <ol className="mt-5 space-y-3">
        {data.steps.map((step, index) => (
          <li
            key={step}
            className={`flex gap-3 text-sm ${isAI ? "" : "text-muted"}`}
          >
            <span
              className={`shrink-0 text-xs font-medium ${
                isAI ? "text-accent" : "text-muted/70"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
