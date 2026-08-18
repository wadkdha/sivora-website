import Link from "next/link";

export function CTASection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-(--container-max) px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          开始您的 AI 自动化之旅
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          与我们聊聊您的业务场景，我们会给出可落地的自动化方案建议。
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          预约咨询
        </Link>
      </div>
    </section>
  );
}
