import Link from "next/link";

/**
 * 首页 AI Lab 预览区块。
 * 第一阶段暂用占位卡片，待 content/experiments 数据模型完成后接入真实实验。
 */
export function LabPreview() {
  return (
    <section className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-(--container-max) px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">AI Lab</h2>
            <p className="mt-2 text-muted">
              GPT 与 Claude 的实际应用探索，持续更新的技术实验记录。
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
          {[1, 2].map((placeholder) => (
            <div
              key={placeholder}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <div className="h-32 rounded-lg bg-surface-muted" />
              <p className="mt-6 text-sm font-medium text-muted">
                实验内容开发中
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
