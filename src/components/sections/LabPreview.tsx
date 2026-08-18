import Link from "next/link";
import { ExperimentCard } from "@/components/lab/ExperimentCard";
import { getFeaturedExperiments } from "@/content/experiments";

/**
 * 首页 AI Lab 预览区块。
 * 与 ShowcasePreview 的定位刻意区分：
 * Showcase 回答"看我们解决了什么问题"，Lab 回答"看我们正在研究什么问题"。
 */
export function LabPreview() {
  const items = getFeaturedExperiments();

  return (
    <section className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-(--container-max) px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">AI Lab</h2>
            <p className="mt-2 text-muted">
              看我们正在研究什么问题——GPT、Claude 在真实任务中的能力探索。
            </p>
          </div>
          <Link
            href="/lab"
            className="hidden text-sm font-medium text-accent hover:underline sm:block"
          >
            进入 Lab →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <ExperimentCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
