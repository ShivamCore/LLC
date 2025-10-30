import type { Metadata } from "next";
import { DashboardNavigation } from "@/components/dashboard/dashboard-navigation";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { TierProvider } from "@/contexts/tier-context";

export const metadata: Metadata = {
  title: "Elite Client Portal | Valenza Media",
  description: "Exclusive performance dashboard for elite aesthetic practices. Real-time insights, campaign management, and growth analytics.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TierProvider initialTier="ai-dominance">
      <div className="min-h-screen gradient-luxury-hero">
        <DashboardNavigation />
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 pt-20">
            {children}
          </main>
        </div>
      </div>
    </TierProvider>
  );
}
