import type { ReactNode } from "react";

interface TimelineStep {
  number: string;
  title: string;
  content: ReactNode;
}

/**
 * Lab 详情页的纵向分区布局，独立于 Showcase 的 ShowcaseStepFlow——
 * 两套内容体系刻意不共用组件，避免为复用而牵动已验收的 Showcase 系统。
 */
export function ExperimentTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative">
      {steps.map((step, index) => (
        <li key={step.number} className="relative flex gap-6 pb-16 last:pb-0">
          {index < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute bottom-0 left-5 top-12 w-px bg-border"
            />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium">
            {step.number}
          </span>
          <div className="flex-1 pt-1.5">
            <h2 className="text-xl font-semibold tracking-tight">
              {step.title}
            </h2>
            <div className="mt-4">{step.content}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
