import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperimentDetail } from "@/components/lab/ExperimentDetail";
import { getAllExperiments, getExperimentBySlug } from "@/content/experiments";

export async function generateStaticParams() {
  return getAllExperiments().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/lab/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperimentBySlug(slug);

  if (!item) {
    return { title: "实验未找到 | Sivora" };
  }

  return {
    title: `${item.title} | Sivora AI Lab`,
    description: item.summary,
  };
}

export default async function ExperimentDetailPage({
  params,
}: PageProps<"/lab/[slug]">) {
  const { slug } = await params;
  const item = getExperimentBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ExperimentDetail item={item} />;
}
