import { redirect } from "next/navigation";

const slugMap: Record<string, string> = {
  aisystems: "aisystems",
  "ai-systems": "aisystems",
  customsoftware: "customsoftware",
  "custom-software": "customsoftware",
  webmobile: "webmobile",
  "web-mobile": "webmobile",
  aievaluation: "aievaluation",
  "ai-evaluation": "aievaluation",
  dedicateddelivery: "dedicateddelivery",
  "dedicated-delivery": "dedicateddelivery",
  digitalgrowth: "digitalgrowth",
  "digital-growth": "digitalgrowth",
};

type Props = { params: Promise<{ slug: string }> };

export default async function SolutionsSlugRedirect({ params }: Props) {
  const { slug } = await params;
  const mapped = slugMap[slug] ?? slug;
  redirect(`/services/${mapped}`);
}
