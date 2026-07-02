import { InterestForm } from "./InterestForm";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-3xl">
        <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
          Ανεξάρτητη εκπαιδευτική πρωτοβουλία
        </p>

        <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          Greek AI Olympiad
        </h1>

        <p className="mt-5 font-serif text-xl italic text-muted-foreground md:text-2xl">
          Προετοιμασία για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης.
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          [Placeholder] Μια στοχευμένη, ήρεμη και βαθιά τεχνική προετοιμασία
          για μαθητές λυκείου που θέλουν να διακριθούν στον ΠΔΤΝ. Ένα ένα
          θέμα τη φορά, με έμφαση στην κατανόηση και στη μαθηματική
          διαίσθηση πίσω από τη Μηχανική Μάθηση.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Εκδήλωση ενδιαφέροντος
          </a>
          <a
            href="#pdtn"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Μάθε τι είναι ο ΠΔΤΝ
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-14 rounded-lg border border-border bg-card p-6 md:p-8">
          <h2 className="font-serif text-lg text-foreground">
            Κράτησε μια θέση για την επόμενη περίοδο
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Άφησε το email σου και θα σε ενημερώσω με τις λεπτομέρειες.
          </p>
          <div className="mt-5">
            <InterestForm />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Ή γράψε μου απευθείας:{" "}
            <a
              href="mailto:hello@greekaiolympiad.gr"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
            >
              hello@greekaiolympiad.gr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
