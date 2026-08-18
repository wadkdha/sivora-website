import Link from "next/link";
import type { ShowcaseCase } from "@/types/showcase";
import { ShowcaseCoverPlaceholder } from "./ShowcaseCoverPlaceholder";

export function ShowcaseCard({ item }: { item: ShowcaseCase }) {
  return (
    <Link
      href={`/showcase/${item.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/30"
    >
      {item.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element -- 案例封面来源未定，暂不接入 next/image 优化
        <img
          src={item.coverImage}
          alt=""
          className="aspect-video w-full rounded-xl border border-border object-cover"
        />
      ) : (
        <ShowcaseCoverPlaceholder />
      )}

      <div className="mt-6 flex items-center gap-2">
        {item.isDemo && (
          <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-medium text-accent">
            Demo
          </span>
        )}
        <span className="text-xs text-muted">{item.industry}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {item.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
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
    </Link>
  );
}
