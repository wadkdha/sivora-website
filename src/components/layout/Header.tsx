import Link from "next/link";

const NAV_ITEMS = [
  { label: "解决方案", href: "/solutions" },
  { label: "案例", href: "/showcase" },
  { label: "AI Lab", href: "/lab" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-(--container-max) items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Sivora
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          联系我们
        </Link>
      </div>
    </header>
  );
}
