import type { ShowcaseCase } from "@/types/showcase";
import { ShowcaseStepFlow } from "./ShowcaseStepFlow";
import { ProcessComparison } from "./ProcessComparison";
import { MetricCard } from "./MetricCard";

export function ShowcaseDetail({ item }: { item: ShowcaseCase }) {
  return (
    <article>
      <header className="mx-auto max-w-(--container-max) px-6 pb-8 pt-16 sm:pt-24">
        <div className="flex flex-wrap items-center gap-2">
          {item.isDemo && (
            <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-medium text-accent">
              Demo · 模拟场景
            </span>
          )}
          <span className="text-xs text-muted">{item.industry}</span>
        </div>

        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {item.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {item.tags
            .filter((tag) => tag !== "Demo")
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-foreground"
              >
                {tag}
              </span>
            ))}
          {item.intelligenceLayer.models.map((model) => (
            <span key={model} className="text-xs text-muted">
              {model}
            </span>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-(--container-max) border-t border-border px-6 py-16 sm:py-20">
        <ShowcaseStepFlow
          steps={[
            {
              number: "01",
              title: "企业问题",
              content: (
                <div>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.problem.description}
                  </p>
                  {item.problem.metrics && (
                    <p className="mt-4 text-sm font-medium text-accent">
                      {item.problem.metrics}
                    </p>
                  )}
                </div>
              ),
            },
            {
              number: "02",
              title: "原人工流程",
              content: (
                <ProcessComparison variant="manual" data={item.manualProcess} />
              ),
            },
            {
              number: "03",
              title: "AI Workflow",
              content: (
                <ProcessComparison variant="ai" data={item.aiWorkflow} />
              ),
            },
            {
              number: "04",
              title: "Intelligence Layer",
              content: (
                <div>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.intelligenceLayer.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.intelligenceLayer.models.map((model) => (
                      <span
                        key={model}
                        className="rounded-full border border-accent/40 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {item.intelligenceLayer.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="rounded-lg bg-surface-muted px-3 py-2 text-sm"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              number: "05",
              title: "预期价值",
              content: (
                <div>
                  <p className="text-sm italic leading-relaxed text-muted">
                    {item.result.description}
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {item.result.metrics.map((metric) => (
                      <MetricCard key={metric.label} {...metric} />
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </article>
  );
}
