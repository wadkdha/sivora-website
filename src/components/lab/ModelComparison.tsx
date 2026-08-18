import type { ExperimentComparison } from "@/types/experiment";

/**
 * 二维对比结构，不做"胜负排行榜"或打分（如 GPT 8.5 / Claude 9.2）。
 * 桌面端用表格，移动端换成堆叠卡片，避免依赖横向滚动才能读到核心信息。
 */
export function ModelComparison({
  comparison,
}: {
  comparison: ExperimentComparison;
}) {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-2xl border border-border sm:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-left">
              <th className="px-5 py-3 font-medium text-muted">评价维度</th>
              <th className="px-5 py-3 font-medium text-muted">GPT</th>
              <th className="px-5 py-3 font-medium text-muted">Claude</th>
            </tr>
          </thead>
          <tbody>
            {comparison.dimensions.map((dimension) => (
              <tr
                key={dimension.name}
                className="border-b border-border last:border-0"
              >
                <td className="px-5 py-4 font-medium">{dimension.name}</td>
                <td className="px-5 py-4 text-muted">
                  {dimension.gpt ?? "待实测"}
                </td>
                <td className="px-5 py-4 text-muted">
                  {dimension.claude ?? "待实测"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 sm:hidden">
        {comparison.dimensions.map((dimension) => (
          <div
            key={dimension.name}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-sm font-semibold">{dimension.name}</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted">GPT</p>
                <p className="mt-1 text-sm">{dimension.gpt ?? "待实测"}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Claude</p>
                <p className="mt-1 text-sm">{dimension.claude ?? "待实测"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {comparison.conclusion && (
        <p className="mt-6 text-sm leading-relaxed text-muted">
          {comparison.conclusion}
        </p>
      )}
    </div>
  );
}
