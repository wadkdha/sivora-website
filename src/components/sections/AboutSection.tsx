/**
 * 首页"关于我们"模块（不作为独立页面，并入首页）。
 */
export function AboutSection() {
  return (
    <section className="mx-auto max-w-(--container-max) px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">关于 Sivora</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Sivora 专注于为中国大陆中小企业提供 AI
          自动化解决方案。我们相信好的自动化不是替换人，而是让人从重复劳动中解放出来，专注在真正创造价值的事情上。
        </p>
      </div>
    </section>
  );
}
