import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ποιός διοργανώνει τον ΠΔΤΝ ;",
    a: `Ο ΠΔΤΝ συνδιοργανώνεται από το ίδρυμα “Αρχιμήδης”, την ΕΠΥ, την ΕΕΤΝ και το ΙΕΠ.`,
  },
  {
    q: "Ποιοί μπορούν να συμμετάσχουν ;",
    a: `Ο διαγωνισμός αφορά μαθητές Γυμνασίου και Λυκείου. Προς το παρόν όλοι οι μαθητές 
    διαγωνίζονται σε κοινά θέματα.`,
  },
  {
    q: "Πως είναι τα μαθήματα (τμήματα / τιμές) ;",
    a:`Τα μαθήματα είναι ένα δίωρο μάθημα μιά φορά την εβδομάδα και γίνονται σε μικρά 
    τμήματα (2-4 μαθητές) από μαθητές κοινού επιπέδου και είναι online. Η τιμή είναι στα 15 ευρώ την ώρα.`,
  },
  {
    q: "Ποιό το περιεχόμενο των μαθημάτων ;",
    a: (
      <>
        <p>
          Τα μαθήματα καλύπτουν όλη τη βασική ύλη που απαιτείται για τον ΠΔΤΝ, όπως:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Deep Learning & Νευρωνικά Δίκτυα</li>
          <li>Computer Vision (Image Analysis)</li>
          <li>Natural Language Processing</li>
          <li>Προβλήματα προηγούμενων διαγωνισμών</li>
        </ul>
        <br />
        <p>
        Για μαθητές με μεγαλύτερη εμπειρία θα δούμε πιό προχωρημένα θέματα που προσανατολίζονται με 
        βάση τον διεθνή διαγωνισμό IOAI (International Olympiad in AI).
        </p>
      </>
    ),
  },
  {
    q: "Χρειάζονται προαπαιτούμενα από τον μαθητή ;",
    a: `Όχι, διότι σε μαθητές που δεν ξέρουν Python θα ξεκινήσουμε από αυτό. Επίσης τα τμήματα 
    θα είναι από μαθητές κοινού επιπέδου (και ηλικίας και προγραμματιστικής εμπειρίας).`,
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
