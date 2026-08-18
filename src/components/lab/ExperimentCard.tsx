import Link from "next/link";
import type { Experiment } from "@/types/experiment";
import { ExperimentStatusBadge } from "./ExperimentStatusBadge";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ExperimentCard({
  item,
  index,
}: {
  item: Experiment;
  index?: number;
}) {
  return (
    <Link
      href={`/lab/${item.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/30"
    >
      <div className="flex items-center gap-2">
        {typeof index === "number" && (
          <span className="font-mono text-xs tabular-nums text-muted">
            EXP.{String(index + 1).padStart(2, "0")}
          </span>
        )}
        <ExperimentStatusBadge status={item.status} />
        <span className="text-xs text-muted">{item.category}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {item.question.title}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {item.models.map((model) => (
          <span
            key={model}
            className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-foreground"
          >
            {model}
          </span>
        ))}
        <span className="text-xs text-muted">{formatDate(item.publishedAt)}</span>
      </div>

      <span className="mt-5 inline-block text-sm font-medium text-accent group-hover:underline">
        查看实验 →
      </span>
    </Link>
  );
}
