interface ContentPanelProps {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

export function ContentPanel({ sectionId, title, children }: ContentPanelProps) {
  return (
    <main id={sectionId} className="apx-shell apx-page">
      <p className="apx-kicker">Apex Innovate FZE LLC</p>
      <h1 className="apx-page-title">{title}</h1>
      <div className="apx-page-body">{children}</div>
    </main>
  );
}
