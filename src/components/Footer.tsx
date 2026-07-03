export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {year} Greek AI Olympiad
        </p>
      </div>
    </footer>
  );
}
