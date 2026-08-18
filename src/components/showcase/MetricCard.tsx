import type { ShowcaseMetric } from "@/types/showcase";

export function MetricCard({ label, value, type }: ShowcaseMetric) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2">
        <p className="text-xs text-muted">{label}</p>
        {type === "estimated" && (
          <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[11px] font-medium text-accent">
            模拟测算
          </span>
        )}
      </div>
      <p className="mt-1.5 text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );
}
