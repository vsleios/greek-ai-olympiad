import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Greek AI Olympiad" },
      {
        name: "description",
        content:
        "Μαθήματα προετοιμασίας για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης με μικρά online τμήματα, καθοδήγηση και πρακτική εξάσκηση σε Python και Machine Learning.",
      },
      { property: "og:title", content: "Greek AI Olympiad" },
      {
        property: "og:description",
        content:
          "Προετοιμασία για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης με μικρά online τμήματα, καθοδήγηση και πρακτική εξάσκηση.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Greek AI Olympiad" },
      { property: "og:url", content: "https://www.greekaiolympiad.gr/" },

      { property: "og:image", content: "https://www.greekaiolympiad.gr/og.jpg" },
      { property: "og:image:secure_url", content: "https://www.greekaiolympiad.gr/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Greek AI Olympiad - Προετοιμασία για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης",
      },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Greek AI Olympiad" },
      {
        name: "twitter:description",
        content:
        "Προετοιμασία για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης με μικρά online τμήματα, καθοδήγηση και πρακτική εξάσκηση.",
      },
      { name: "twitter:image", content: "https://www.greekaiolympiad.gr/og.jpg" },
      {
        name: "twitter:image:alt",
        content:
          "Greek AI Olympiad - Προετοιμασία για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης",
      },

    ],
    links: [
      { rel: "canonical", href: "https://www.greekaiolympiad.gr/" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.greekaiolympiad.gr/#organization",
  name: "Greek AI Olympiad",
  url: "https://www.greekaiolympiad.gr/",
  logo: "https://www.greekaiolympiad.gr/apple-touch-icon.png",
  image: "https://www.greekaiolympiad.gr/og.jpg",
  email: "greek.ai.olympiad@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "information",
    email: "greek.ai.olympiad@gmail.com",
  },
  description:
  "Ανεξάρτητη εκπαιδευτική πρωτοβουλία που προσφέρει μαθήματα προετοιμασίας για τον Πανελλήνιο Διαγωνισμό Τεχνητής Νοημοσύνης (ΠΔΤΝ).",
  sameAs: [
    "https://www.youtube.com/@GreekAIOlympiad",
    "https://www.facebook.com/profile.php?id=61591892273878",
    "https://www.instagram.com/greek.ai.olympiad/",
  ],
};


function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

        {GA_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
