import Link from "next/link";

/**
 * 首页案例预览区块。
 * 第一阶段暂用占位卡片，待 content/showcases 数据模型完成后接入真实案例。
 */
export function ShowcasePreview() {
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
        {[1, 2, 3].map((placeholder) => (
          <div
            key={placeholder}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="h-32 rounded-lg bg-surface-muted" />
            <p className="mt-6 text-sm font-medium text-muted">
              案例内容开发中
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
