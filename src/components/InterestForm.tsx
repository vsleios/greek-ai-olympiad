import { useState, type FormEvent } from "react";

// Replace FORMSPREE_ENDPOINT later with a real Formspree URL, e.g.
// "https://formspree.io/f/xxxxxx". Until then the form just simulates success.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";

export function InterestForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="interest-email" className="sr-only">
        Email
      </label>
      <input
        id="interest-email"
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full flex-1 rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-60"
      >
        {status === "loading" ? "Αποστολή..." : "Εγγραφή"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`sr-only ${status !== "idle" ? "" : ""}`}
      >
        {status === "success" && "Ευχαριστώ! Θα επικοινωνήσω σύντομα."}
        {status === "error" && "Κάτι πήγε στραβά. Δοκίμασε ξανά."}
      </p>
      {status === "success" && (
        <p className="text-sm text-primary sm:w-full sm:basis-full">
          Ευχαριστώ — θα επικοινωνήσω σύντομα.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive sm:w-full sm:basis-full">
          Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε email.
        </p>
      )}
    </form>
  );
}
