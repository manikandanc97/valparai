import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/shared/section-heading";
import dynamic from "next/dynamic";

const PackagesTabsClient = dynamic(
  () => import("@/components/packages/packages-tabs-client"),
  { loading: () => <div className="h-96" /> }
);

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding container-wide space-y-10">
        <SectionHeading
          eyebrow="Our Packages"
          title="Choose Your Perfect Trip"
          description="From budget-friendly getaways to luxury escapes — find the Valparai experience that fits your style."
        />
        <PackagesTabsClient />
      </section>
    </main>
  );
}
