import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-(--container-max) px-6 py-28 sm:py-36">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-accent">AI 自动化解决方案</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          让 AI 真正为您的业务创造结果
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">
          Sivora 帮助中国大陆中小企业，将 GPT、Claude
          转化为可落地的自动化能力——从业务梳理到真实上线。
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            预约咨询
          </Link>
          <Link
            href="/showcase"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            查看案例
          </Link>
        </div>
      </div>
    </section>
  );
}
