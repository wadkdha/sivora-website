import type { ReactNode } from "react";
import type { Experiment } from "@/types/experiment";
import { ExperimentStatusBadge } from "./ExperimentStatusBadge";
import { ExperimentTimeline } from "./ExperimentTimeline";
import { ModelComparison } from "./ModelComparison";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ExperimentDetail({ item }: { item: Experiment }) {
  const steps: { title: string; content: ReactNode }[] = [
    {
      title: "Research Question · 研究问题",
      content: (
        <div>
          <p className="text-base font-medium">{item.question.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.question.description}
          </p>
        </div>
      ),
    },
    {
      title: "Why It Matters · 为什么值得研究",
      content: (
        <p className="text-sm leading-relaxed text-muted">
          {item.whyItMatters.description}
        </p>
      ),
    },
    {
      title: "Experiment Setup · 实验设计",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-muted">{item.setup.task}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.setup.inputDescription}
          </p>
          <p className="mt-5 text-xs font-medium text-muted">评价维度</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {item.setup.evaluationCriteria.map((criterion) => (
              <li
                key={criterion}
                className="rounded-lg bg-surface-muted px-3 py-2 text-sm"
              >
                {criterion}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Approach · 测试方法",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-muted">
            {item.approach.description}
          </p>
          <ol className="mt-4 space-y-3">
            {item.approach.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm">
                <span className="shrink-0 text-xs font-medium text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ),
    },
  ];

  if (item.comparison?.enabled) {
    steps.push({
      title: "Comparison · GPT vs Claude 对比",
      content: <ModelComparison comparison={item.comparison} />,
    });
  }

  if (item.findings) {
    steps.push({
      title: "Findings · 关键发现",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-muted">
            {item.findings.summary}
          </p>
          <ul className="mt-4 space-y-2">
            {item.findings.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted">
                <span className="shrink-0 text-accent">·</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    });
  }

  if (item.recommendation) {
    const recommendation = item.recommendation;
    steps.push({
      title: "Recommendation · 使用建议",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-muted">
            {recommendation.summary}
          </p>
          <p className="mt-4 text-xs font-medium text-muted">适合场景</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {recommendation.bestFor.map((scenario) => (
              <li
                key={scenario}
                className="rounded-lg border border-accent/30 px-3 py-2 text-sm"
              >
                {scenario}
              </li>
            ))}
          </ul>
          {recommendation.limitations && recommendation.limitations.length > 0 && (
            <>
              <p className="mt-5 text-xs font-medium text-muted">局限性</p>
              <ul className="mt-3 space-y-2">
                {recommendation.limitations.map((limitation) => (
                  <li key={limitation} className="text-sm text-muted">
                    {limitation}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ),
    });
  }

  const numberedSteps = steps.map((step, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: step.title,
    content: step.content,
  }));

  return (
    <article>
      <header className="mx-auto max-w-(--container-max) px-6 pb-8 pt-16 sm:pt-24">
        <div className="flex flex-wrap items-center gap-2">
          <ExperimentStatusBadge status={item.status} />
          <span className="text-xs text-muted">{item.category}</span>
          <span className="text-xs text-muted">{formatDate(item.publishedAt)}</span>
        </div>

        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {item.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-foreground"
            >
              {tag}
            </span>
          ))}
          {item.models.map((model) => (
            <span
              key={model}
              className="rounded-full border border-accent/40 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {model}
            </span>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-(--container-max) border-t border-border px-6 py-16 sm:py-20">
        <ExperimentTimeline steps={numberedSteps} />
      </div>
    </article>
  );
}
