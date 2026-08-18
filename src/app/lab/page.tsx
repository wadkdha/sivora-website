import type { Metadata } from "next";
import { ExperimentCard } from "@/components/lab/ExperimentCard";
import { getAllExperiments } from "@/content/experiments";

export const metadata: Metadata = {
  title: "AI Lab | Sivora",
  description:
    "探索 GPT、Claude 在真实任务中的能力边界与最佳使用方式。不比较谁绝对更强，只研究什么任务更适合什么模型。",
};

export default function LabPage() {
  const items = getAllExperiments();

  return (
    <div className="mx-auto max-w-(--container-max) px-6 py-24 sm:py-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          AI Lab
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          探索 GPT、Claude 在真实任务中的能力边界与最佳使用方式。
        </p>
        <p className="mt-2 text-sm text-muted">
          不比较谁「绝对更强」，只研究什么任务更适合什么模型。
        </p>
      </div>

      {items.length > 0 ? (
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <ExperimentCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-14 rounded-2xl border border-border bg-surface-muted p-10 text-center text-sm text-muted">
          AI Lab 正在筹备实验内容，敬请期待。
        </div>
      )}
    </div>
  );
}
