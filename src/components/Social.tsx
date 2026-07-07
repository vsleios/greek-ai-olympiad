import { Section } from "./Section";

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@GreekAIOlympiad",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591892273878",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/greek.ai.olympiad/",
  },
] as const;

export function Social() {
  return (
    <Section
      id="social"
      eyebrow="03 — Εκπαιδευτικό υλικό"
      title="Πού μπορώ να δω περισσότερο υλικό;"
    >
      <p>
      Μπορείτε να βρείτε αναλύσεις θεμάτων, εκπαιδευτικό υλικό και ενημερώσεις σχετικά με τον ΠΔΤΝ
       στα παρακάτω μέσα.
      </p>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground no-underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:underline hover:decoration-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}