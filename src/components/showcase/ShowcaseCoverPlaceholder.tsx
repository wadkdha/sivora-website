/**
 * 案例暂无真实素材时的抽象占位视觉。
 * 纯几何、纯色块，不使用机器人/脑图/电路/渐变类意象。
 */
export function ShowcaseCoverPlaceholder() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-surface-muted">
      <span className="absolute right-6 top-6 h-10 w-10 rounded-md border border-accent/40" />
      <span className="absolute bottom-6 left-6 h-5 w-5 rounded-sm bg-accent/15" />
    </div>
  );
}
