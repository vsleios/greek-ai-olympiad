import { InterestForm } from "./InterestForm";


export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-3xl">

        <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          Greek AI Olympiad
        </h1>

        <p className="mt-5 font-serif text-xl italic text-muted-foreground md:text-2xl">
        Μαθήματα προετοιμασίας για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης.
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Μικρά τμήματα • Online • Εξατομικευμένη καθοδήγηση
        </p>


<div className="mt-14 space-y-4">
          {/* Box 1 — static contact info */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="text-base leading-relaxed text-foreground">
              Επικοινωνήστε μαζί μου στο:
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              <a
                href="mailto:greek.ai.olympiad@gmail.com"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                greek.ai.olympiad@gmail.com
              </a>
              {" "}ή στο{" "}
              <a
                href="tel:+306982246872"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                6982246872
              </a>
            </p>
          </div>

          <p className="text-left text-sm text-muted-foreground">ή</p>

          {/* Box 2 — email signup */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Eπικοινωνώ εγώ μαζί σας, συμπληρώνοντας το email σας στο πεδίο:
            </p>
            <div className="mt-5">
              <InterestForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
