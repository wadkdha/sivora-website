import type { ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  content: ReactNode;
}

/**
 * 纵向时间轴布局：编号 + 连接线 + 内容分区，从上到下自然阅读。
 * 不使用 Tab，所有内容始终可见。
 */
export function ShowcaseStepFlow({ steps }: { steps: Step[] }) {
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
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium">
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
