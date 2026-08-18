import Link from "next/link";

const FOOTER_LINKS = [
  { label: "解决方案", href: "/solutions" },
  { label: "案例", href: "/showcase" },
  { label: "AI Lab", href: "/lab" },
  { label: "联系我们", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-(--container-max) flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold tracking-tight">Sivora</p>
          <p className="mt-1 text-sm text-muted">AI 自动化解决方案</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-muted">© {year} Sivora. All rights reserved.</p>
      </div>
    </footer>
  );
}
