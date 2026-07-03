import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Competition } from "@/components/Competition";
import { About } from "@/components/About";
import { Motivation } from "@/components/Motivation";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Competition />
        <About />
        <FAQ />
        <Motivation />
      </main>
      <Footer />
    </div>
  );
}
