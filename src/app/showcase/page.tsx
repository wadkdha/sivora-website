import type { Metadata } from "next";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";
import { getAllShowcases } from "@/content/showcases";

export const metadata: Metadata = {
  title: "案例 | Sivora",
  description:
    "Sivora 的 AI 自动化案例：问题 → 人工流程 → AI Workflow → Intelligence Layer → 预期价值。",
};

export default function ShowcasePage() {
  const items = getAllShowcases();

  return (
    <div className="mx-auto max-w-(--container-max) px-6 py-24 sm:py-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          案例
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          问题 → 人工流程 → AI Workflow → Intelligence Layer →
          预期价值，真实业务场景中的落地方式。
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ShowcaseCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
