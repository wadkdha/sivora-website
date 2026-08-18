import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowcaseDetail } from "@/components/showcase/ShowcaseDetail";
import { getAllShowcases, getShowcaseBySlug } from "@/content/showcases";

export async function generateStaticParams() {
  return getAllShowcases().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/showcase/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);

  if (!item) {
    return { title: "案例未找到 | Sivora" };
  }

  return {
    title: `${item.title} | Sivora`,
    description: item.summary,
  };
}

export default async function ShowcaseDetailPage({
  params,
}: PageProps<"/showcase/[slug]">) {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ShowcaseDetail item={item} />;
}
