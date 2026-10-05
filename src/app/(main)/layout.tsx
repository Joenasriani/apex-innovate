import { Header } from "@/components/layout/header";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative overflow-y-auto">
      <Header />
      <main className="max-w-6xl mx-auto px-3 py-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 pb-8">
        <SidebarNav />
        <section className="lg:col-span-8">{children}</section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
