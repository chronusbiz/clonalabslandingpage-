import { LandingPage } from "@/components/LandingPage";
import { getPublicEnv } from "@/lib/env";
import { pickTracking, variantFromS } from "@/lib/utm";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const tracking = pickTracking(params);
  const env = getPublicEnv();

  return (
    <div id="top">
      <LandingPage
        variant={variantFromS(tracking.s)}
        bookingUrl={env.bookingUrl}
        showPricing={env.showPricing}
        tracking={tracking}
      />
    </div>
  );
}
