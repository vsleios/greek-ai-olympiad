export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p className="font-serif text-foreground">Greek AI Olympiad</p>
        <p>
          © {year} — Ανεξάρτητη εκπαιδευτική πρωτοβουλία.
        </p>
      </div>
    </footer>
  );
}
