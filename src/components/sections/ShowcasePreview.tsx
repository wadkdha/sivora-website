import Link from "next/link";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";
import { getFeaturedShowcases } from "@/content/showcases";

export function ShowcasePreview() {
  const items = getFeaturedShowcases();

  return (
    <section className="mx-auto max-w-(--container-max) px-6 py-24">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">案例</h2>
          <p className="mt-2 text-muted">
            问题 → 人工流程 → AI Workflow → 结果，真实业务场景中的落地方案。
          </p>
        </div>
        <Link
          href="/showcase"
          className="hidden text-sm font-medium text-accent hover:underline sm:block"
        >
          查看全部 →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <ShowcaseCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
