import SectionHeading from "@/components/shared/section-heading";
import dynamic from "next/dynamic";
import { getMergedPackages } from "@/lib/cloudinary";

const PackagesTabsClient = dynamic(
  () => import("@/components/packages/packages-tabs-client"),
  { loading: () => <div className="h-96" /> }
);

export const revalidate = 3600;

export default async function PackagesPage() {
  const packages = await getMergedPackages();
  
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-wide space-y-10">
        <SectionHeading
          eyebrow="Our Packages"
          title="Choose Your Perfect Trip"
          description="From budget-friendly getaways to luxury escapes — find the Valparai experience that fits your style."
        />
        <PackagesTabsClient packages={packages} />
      </section>
    </main>
  );
}
