import type { ShowcaseMetric } from "@/types/showcase";

export function MetricCard({ label, value }: ShowcaseMetric) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1.5 text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );
}
