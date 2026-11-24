import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="apx-secondary-site">
      <a className="apx-skip-link" href="#main">Skip to main content</a>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
