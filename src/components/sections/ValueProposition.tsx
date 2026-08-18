const VALUES = [
  {
    title: "专业",
    description: "基于真实业务场景设计自动化方案，而非通用模板堆砌。",
  },
  {
    title: "克制",
    description: "只保留真正解决问题的部分，不为炫技增加复杂度。",
  },
  {
    title: "有结果",
    description: "每一个方案都对应可衡量的业务结果，而非停留在概念演示。",
  },
];

export function ValueProposition() {
  return (
    <section className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-(--container-max) px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
