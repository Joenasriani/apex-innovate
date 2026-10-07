interface ContentPanelProps {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

export function ContentPanel({
  sectionId,
  title,
  children,
}: ContentPanelProps) {
  return (
    <main
      id={sectionId}
      className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <p className="eyebrow">Apex Innovate FZE LLC</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[var(--ink)] md:text-6xl">
        {title}
      </h1>
      <div className="mt-10 border-t border-[var(--line)] pt-8">{children}</div>
    </main>
  );
}
