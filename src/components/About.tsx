import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="02 — Ο διδάσκων" title="Ποιός είμαι;">

      <ul className="list-disc space-y-3 pl-5">
        <li>
          Σαν μαθητής (2012-2016) συμμετείχα ενεργά κι εγώ στους πανελλήνιους διαγωνισμούς
          Μαθηματικών (και σε άλλες δράσεις της Ελληνικής Μαθηματικής Εταιρείας),
          όπου είχα κάποιες διακρίσεις σε εθνικό επίπεδο (3 μετάλλια στη φάση
          «Αρχιμήδης» και κάποιους επαίνους στη φάση «Ευκλείδης»).
        </li>
        <li>
          Σε επίπεδο μεταπτυχιακού (2022-2024) ειδικεύτηκα στο αντικείμενο του διαγωνισμού
          (MSc Data Science, Uppsala University, Sweden). 
        </li>
        <li>Σήμερα εργάζομαι σαν AI Engineer.</li>
        <li>Δίδαξα μαθήματα για τον ΠΔΤΝ 2026.</li>
        <li>
          Μαθητής μου στον ΠΔΤΝ 2026 κατέκτησε την 10η θέση στον διαγωνισμό
          πανελλαδικά.
        </li>
      </ul>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
        
        <li>
          <a
            href="https://www.linkedin.com/in/vasileios-toumpanakis-9619a8221/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground no-underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:underline hover:decoration-primary"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </Section>
  );
}
