import { createFileRoute, Link } from "@tanstack/react-router";

const title = "TEF Canada Preparation | Online TEF Canada Classes — French Excel";

const description =
  "Prepare for the TEF Canada online with personalised French classes, speaking and writing practice, listening and reading exercises, mock tests and detailed feedback.";

export const Route = createFileRoute("/tef-canada")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      {
        property: "og:url",
        content: "https://frenchexcel.org/tef-canada",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "French Excel" },

      {
        property: "og:image",
        content: "https://frenchexcel.org/og-image.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "French Excel — online TEF Canada preparation with native French teachers",
      },
      { property: "og:locale", content: "en_US" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content: "https://frenchexcel.org/og-image.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "TEF Canada Preparation — Online Classes",
          description:
            "Online TEF Canada preparation with personalised French classes, speaking and writing practice, listening and reading exercises, mock tests and detailed feedback from native French teachers.",
          url: "https://frenchexcel.org/tef-canada",
          inLanguage: "en",
          teaches:
            "TEF Canada exam strategy across speaking, writing, listening and reading",
          provider: { "@id": "https://frenchexcel.org/#organization" },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            inLanguage: "fr",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://frenchexcel.org/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "TEF Canada Preparation",
              item: "https://frenchexcel.org/tef-canada",
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/tef-canada",
      },
    ],
  }),

  component: TefCanadaPage,
});

function TefCanadaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            TEF Canada Preparation
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Prepare for the TEF Canada with a clear plan.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Build the French skills and exam strategies you need for the TEF
            Canada with personalised online classes, exam-style practice,
            mock tests and detailed feedback from French teachers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Start Your Preparation
            </a>

            <Link
              to="/"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Explore French Excel
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            TEF Canada preparation online
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Preparing for the TEF Canada requires more than simply studying
              French vocabulary and grammar. You also need to become
              comfortable with the format of the exam and develop strategies
              for each section.
            </p>

            <p>
              At French Excel, our online TEF Canada classes combine French
              language development with exam-focused preparation. You practise
              through realistic exercises, receive personalised feedback and
              work on the areas that need the most improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Exam-focused training
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Practise the skills you need for the TEF Canada
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Speaking",
                text: "Practise communicating clearly and confidently through guided speaking exercises, roleplays and personalised feedback.",
              },
              {
                title: "Writing",
                text: "Develop your written French through structured exercises, corrections and feedback focused on clarity, accuracy and organisation.",
              },
              {
                title: "Listening",
                text: "Improve your ability to understand spoken French through targeted listening exercises and exam-style practice.",
              },
              {
                title: "Reading",
                text: "Build reading speed, vocabulary and comprehension with exercises designed to help you work effectively with French texts.",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <h3 className="font-serif text-2xl">{skill.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            What you get with French Excel
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Personalised online French lessons",
              "TEF Canada exam-focused practice",
              "Speaking and writing feedback",
              "Listening and reading exercises",
              "Mock tests and exam-style activities",
              "Flexible learning packages",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border p-5"
              >
                <span className="mt-1 text-lg">✓</span>
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            Who is TEF Canada preparation for?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Our TEF Canada preparation is suitable for learners who are
              preparing for the exam and want structured guidance rather than
              studying alone.
            </p>

            <p>
              Whether you need to strengthen your general French level, focus
              on particular exam skills or practise under realistic exam
              conditions, your preparation can be adapted to your current
              level and goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">
            Ready to start your TEF Canada preparation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Get structured preparation, personalised feedback and practical
            exam training with French Excel.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 font-medium text-background transition-opacity hover:opacity-80"
          >
            Contact French Excel
          </a>
        </div>
      </section>
    </main>
  );
}