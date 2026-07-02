import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="02 — Ο διοργανωτής" title="Ποιός είμαι;">
      <p>
        [Placeholder] Ονομάζομαι [Όνομα Επώνυμο] και εργάζομαι ως AI
        Engineer. Έχω σπουδάσει [σχολή / πανεπιστήμιο] και ασχολούμαι
        καθημερινά με εφαρμογές Μηχανικής Μάθησης σε παραγωγικά
        περιβάλλοντα.
      </p>
      <p>
        [Placeholder] Δεν είμαι φροντιστήριο και δεν είμαι εταιρεία. Είμαι
        ένας μηχανικός που θέλει να δώσει σε μαθητές λυκείου την
        προετοιμασία που ο ίδιος θα ήθελε να έχει όταν ήταν στη θέση τους.
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
        {/* Placeholder social links — replace hrefs when ready */}
        <li>
          <a
            href="#"
            className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
          >
            Προσωπικός ιστότοπος
          </a>
        </li>
      </ul>
    </Section>
  );
}
