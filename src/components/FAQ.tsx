import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Σε ποιους απευθύνεται η προετοιμασία;",
    a: "[Placeholder] Σε μαθητές λυκείου με ισχυρό ενδιαφέρον για μαθηματικά και προγραμματισμό, που θέλουν να προετοιμαστούν σοβαρά για τον ΠΔΤΝ.",
  },
  {
    q: "Χρειάζεται προηγούμενη γνώση Python ή Machine Learning;",
    a: "[Placeholder] Βασική εξοικείωση με Python βοηθάει. Δεν προϋποτίθεται καμία γνώση Μηχανικής Μάθησης — ξεκινάμε από τα θεμέλια.",
  },
  {
    q: "Πώς γίνονται τα μαθήματα;",
    a: "[Placeholder] Διαδικτυακά, σε μικρές ομάδες, με έμφαση στη λύση προβλημάτων και στην κατανόηση της θεωρίας πίσω από κάθε αλγόριθμο.",
  },
  {
    q: "Υπάρχει κόστος συμμετοχής;",
    a: "[Placeholder] Οι λεπτομέρειες θα κοινοποιηθούν στους ενδιαφερομένους μέσω email.",
  },
  {
    q: "Πότε ξεκινά η επόμενη περίοδος;",
    a: "[Placeholder] Οι ημερομηνίες ανακοινώνονται μέσω της λίστας ενδιαφέροντος.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-border/70 py-20 md:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            04 — Συχνές ερωτήσεις
          </p>
          <h2
            id="faq-title"
            className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl"
          >
            FAQ
          </h2>
        </div>
        <div className="max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
