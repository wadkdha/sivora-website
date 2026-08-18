import type { ExperimentStatus } from "@/types/experiment";

const LABELS: Record<ExperimentStatus, string> = {
  demo: "实验 Demo",
  completed: "已完成",
};

export function ExperimentStatusBadge({ status }: { status: ExperimentStatus }) {
  const isDemo = status === "demo";

  return (
    <span
      className={
        isDemo
          ? "rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-medium text-accent"
          : "rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
      }
    >
      {LABELS[status]}
    </span>
  );
}
