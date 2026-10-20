import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Thank You | French Excel";

const description =
  "Your French Excel consultation request has been received.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, follow" },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "French Excel",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/thank-you",
      },
    ],
  }),

  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="min-h-[70vh] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          French Excel
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Thank you — your request has been received.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          We'll review your exam, target score and timeline and get back to you
          within two working days.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Back to French Excel
        </Link>
      </div>
    </main>
  );
}