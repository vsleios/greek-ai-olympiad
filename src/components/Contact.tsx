import { InterestForm } from "./InterestForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border/70 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            05 — Επικοινωνία
          </p>
          <h2
            id="contact-title"
            className="mt-2 font-serif text-3xl leading-tight text-foreground md:text-4xl"
          >
            Εκδήλωση ενδιαφέροντος
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            [Placeholder] Άφησε το email σου για ενημερώσεις σχετικά με την
            επόμενη περίοδο προετοιμασίας, ή γράψε μου απευθείας.
          </p>

          <div className="mt-8 text-left">
            <InterestForm />
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Email:{" "}
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
