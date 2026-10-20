import { createFileRoute, Link } from "@tanstack/react-router";
import { PackageCard } from "@/components/package-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ContactSection } from "@/components/contact-section";
import { packages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import { pillars, courseModules } from "@/data/curriculum";

const title = "French Excel | Online French Classes & TEF/TCF Preparation";
const description =
  "Online French classes and TEF/TCF preparation with native French teachers. Personalised lessons, exam practice, mock tests, detailed feedback and flexible packages.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://frenchexcel.org/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "French Excel" },

      {
        property: "og:image",
        content: "https://frenchexcel.org/og-image.png",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content:
          "French Excel — online TEF, TCF and DELF preparation with native French teachers",
      },

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
          name: "French Exam Preparation — TEF, TCF, DELF & DALF",
          description:
            "Online French classes and exam preparation for TEF Canada, TCF Canada, TCF Tout Public, DELF and DALF with native French-speaking teachers. Personalised lessons, exam-style practice, mock tests and detailed feedback.",
          url: "https://frenchexcel.org/",
          inLanguage: "en",
          teaches:
            "French language and TEF, TCF, DELF and DALF exam strategy",
          educationalLevel: "A1 to C1 (CEFR)",
          provider: { "@id": "https://frenchexcel.org/#organization" },
          offers: {
            "@type": "Offer",
            category: "Online French exam preparation",
            priceCurrency: "CAD",
            price: "150",
            availability: "https://schema.org/InStock",
            url: "https://frenchexcel.org/#packages",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT5H",
            inLanguage: "fr",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How are the lessons delivered?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Every lesson is one-to-one over video call, scheduled around your timezone. You receive a written summary and homework after each session.",
              },
            },
            {
              "@type": "Question",
              name: "Can I split payment across a package?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Packages of 12 sessions or more can be paid in two or three instalments — just mention it when you book.",
              },
            },
            {
              "@type": "Question",
              name: "What if I need to reschedule?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sessions can be moved free of charge with 24 hours' notice. Unused sessions stay valid for six months.",
              },
            },
            {
              "@type": "Question",
              name: "Which exam should I take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "TEF and TCF are the usual choice for Canadian immigration; DELF/DALF is a lifetime diploma often required for study. We help you settle this before you enroll.",
              },
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "98%", label: "Pass rate" },
  { value: "1,200+", label: "Students coached" },
  { value: "100%", label: "Native speakers" },
  { value: "A1–C1", label: "All levels" },
];

const strengths = [
  {
    title: "Native French speakers",
    body: "Every teacher is a native speaker from France, Belgium or Québec — so you hear the accents you will actually face on exam day.",
  },
  {
    title: "Certified & experienced",
    body: "All hold FLE teaching qualifications, with 8 to 20 years of classroom and one-to-one experience each.",
  },
  {
    title: "Exam specialists",
    body: "Several of us have sat or invigilated the TEF, TCF and DELF, and grade your work against the official criteria.",
  },
  {
    title: "Matched to you",
    body: "You are paired with the teacher whose specialism, schedule and teaching style fit your target score.",
  },
];

const milestones = [
  { year: "2015", text: "Founded as a two-teacher atelier for adult learners and expatriates." },
  { year: "2019", text: "Specialised entirely in high-stakes certification: TEF, TCF and DELF." },
  { year: "2023", text: "Grew to a team of native French teachers, several former exam examiners." },
  { year: "Today", text: "1,200+ candidates coached, with a 98% first-attempt pass rate." },
];

const faqs = [
  {
    q: "How are the lessons delivered?",
    a: "Every lesson is one-to-one over video call, scheduled around your timezone. You receive a written summary and homework after each session.",
  },
  {
    q: "Can I split payment across a package?",
    a: "Yes. Packages of 12 sessions or more can be paid in two or three instalments — just mention it when you book.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Sessions can be moved free of charge with 24 hours' notice. Unused sessions stay valid for six months.",
  },
  {
    q: "Which exam should I take?",
    a: "TEF and TCF are the usual choice for Canadian immigration; DELF/DALF is a lifetime diploma often required for study. We help you settle this before you enroll.",
  },
];

function Index() {
  return (
    <>
      <section id="top" className="scroll-mt-20 px-6 py-20 md:py-28">
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Native French teachers · TEF · TCF · DELF
          </p>
          <h1 className="text-balance font-serif text-4xl leading-tight md:text-6xl">
            Pass your French exam with a plan, not guesswork.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-lg text-muted-foreground">
            French Excel offers online French classes and exam preparation for TEF Canada, TCF Canada, TCF Tout Public, DELF and DALF. 
            Learn with native French-speaking teachers through personalised lessons, exam-style practice, mock tests and detailed feedback.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#packages"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              See packages & prices
            </a>
            <a
              href="#method"
              className="w-full rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              How we teach
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-serif text-3xl text-primary">{s.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

    <section className="border-y border-border bg-surface py-8">
  <div className="mx-auto max-w-6xl px-6">
    <p className="mb-5 text-center font-serif text-sm text-muted-foreground">
      French exam preparation for
    </p>

    <div className="flex flex-wrap items-center justify-around gap-6">
      <Link
        to="/tef-canada"
        className="font-serif text-lg text-muted-foreground transition-colors hover:text-foreground"
      >
        TEF Canada
      </Link>

      <span className="font-serif text-lg text-muted-foreground">
        TCF Canada
      </span>

      <span className="font-serif text-lg text-muted-foreground">
        TCF Tout Public
      </span>

      <span className="font-serif text-lg text-muted-foreground">
        DELF / DALF
      </span>
    </div>
  </div>
</section>

      {/* ABOUT */}
      {/* YOUR TEACHER */}
      <section id="teacher" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <img
              src="/teacher-joel.jpg"
              alt="Joel, native French teacher and TEF, TCF and DELF exam coach"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The person behind the plan
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Meet <em className="text-primary">Joel</em>
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                I'm a native French speaker with eight years of experience teaching French to adults
                — from complete beginners to candidates chasing a C1 on exam day.
              </p>
              <p>
                I've helped hundreds of students prepare for the TEF, TCF and DELF, and reach the
                score they needed for permanent residency, a university place or a career move.
              </p>
              <p className="font-serif text-lg italic text-primary">
                Whatever your goal — PR, study, work or for the joy of it — we build the plan that gets you there
              </p>  
            </div>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              {[
                "A personalised plan",
                "One-to-one coaching for your weaknesses",
                "Real exam-style practice and detailed feedback",
                "A clear strategy for exam day — not just general French lessons",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-9 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start your journey →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <img
            src="/team-photo.jpg"
            alt="A live online French lesson on a laptop, with a native French teacher and students connected"
            width={1440}
            height={1088}
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-xl"
          />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl">
              Live online classes with native French speakers.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                French Excel is a small team of native French speakers, all certified in
                teaching French as a foreign language (FLE), with backgrounds ranging from
                university lecturing to official exam invigilation.
              </p>
              <p>
                Between us we have coached over 1,200 professionals, students and future immigrants
                through the exam standing between them and their plans — a visa, a university place,
                a promotion.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title}>
                  <p className="font-serif text-base text-primary">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>

            <ol className="mt-10 space-y-5 border-l border-border pl-6">
              {milestones.map((m) => (
                <li key={m.year}>
                  <span className="font-serif text-sm text-primary">{m.year}</span>
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="scroll-mt-20 border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The method
            </p>
            <h2 className="text-balance text-3xl md:text-4xl">
              We don't just learn French. We learn the exam.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Six principles that shape every lesson, from your first diagnostic to the week of your
              exam.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-serif text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Course outline
          </p>
          <h2 className="text-3xl md:text-4xl">What a full preparation course covers</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A typical twelve-week track. Shorter packages compress the same modules around your exam
            date.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {courseModules.map((m) => (
            <article
              key={m.module}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-serif text-sm text-primary">{m.module}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.weeks}</p>
              </div>
              <h3 className="mt-2 font-serif text-xl">{m.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {m.points.map((pt) => (
                  <li key={pt}>— {pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Success stories
            </p>
            <h2 className="text-3xl md:text-4xl">What our students say</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Real results from candidates who prepared with our team of native French teachers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="scroll-mt-20 border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Packages & prices
            </p>
            <h2 className="text-3xl md:text-4xl">Transparent pricing for every exam timeline.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              All packages are fully online and built around the TEF, TCF and DELF marking
              criteria. Not sure which fits? Message us and we'll help you choose.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Prices are per month and include all materials, mock exams and written feedback.
          </p>

          <div className="mx-auto mt-20 max-w-3xl">
            <h3 className="text-center font-serif text-2xl">Questions before you book</h3>
            <dl className="mt-10 space-y-8">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-border pb-8 last:border-0">
                  <dt className="font-serif text-lg">{f.q}</dt>
                  <dd className="mt-2 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}