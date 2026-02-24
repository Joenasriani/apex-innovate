import { Header } from "@/components/layout/header";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative overflow-y-auto">
      <Header />
      <main className="max-w-6xl mx-auto px-3 py-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 pb-24 lg:pb-8">
        {/* Sidebar hidden on mobile, visible on lg+ */}
        <SidebarNav />
        <section className="lg:col-span-8">{children}</section>
      </main>
      {/* Mobile bottom navigation */}
      <MobileNav />
    </div>
  );
}
