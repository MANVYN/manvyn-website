"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  categories: string[];
  publishedAt: string;
  readTime: number | null;
  featured: boolean;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Pill label, same style as "WHO WE ARE" / "WHAT WE BELIEVE" on the About page */
function Pill({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] ${
        tone === "dark"
          ? "border-white/10 bg-[#1a2a63] text-[#7f9cf5]"
          : "border-[#d9e1fa] bg-[#e8edfb] text-[#2f55d4]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "dark" ? "bg-[#7f9cf5]" : "bg-[#2f55d4]"
        }`}
      />
      {children}
    </span>
  );
}

function ArticleCard({ article }: { article: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-md border border-white/10 bg-[#15245a]/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6fe3]/60 hover:bg-[#182a66]">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-[16/8.5] overflow-hidden bg-[#0c1745]">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0c1745] to-[#2f55d4] text-white">
              <span className="text-sm font-semibold tracking-wide">
                MANVYN INSIGHTS
              </span>
            </div>
          )}

          {/* <span className="absolute bottom-0 left-3 translate-y-1/2 rounded-full border border-white/10 bg-[#1a2a63] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#8fa8f7] shadow-sm"> */}
          <span className="absolute bottom-5 left-3 translate-y-1/2 rounded-full border border-white/10 bg-[#1a2a63] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#8fa8f7] shadow-sm">
            {article.categories[0] ?? "Insights"}
          </span>
        </div>

        <div className="flex min-h-[190px] flex-col p-4 pt-5">
          <div className="flex flex-wrap items-center gap-2 text-[14px] text-[#8c98bd]">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span>·</span>
            <span>{article.readTime ?? 5} min read</span>
          </div>

          <h3 className="pt-3 text-[16px] font-semibold leading-[1.4] tracking-tight text-white transition-colors group-hover:text-[#8fa8f7]">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-[14px] leading-[1.4] text-[#8c98bd] pt-3">
            {article.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs font-semibold text-[#8fa8f7]">
            Read article <Arrow className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogListing({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = posts.find((post) => post.featured) ?? posts[0];

  const categories = useMemo(
    () => ["All", ...new Set(posts.flatMap((post) => post.categories))],
    [posts],
  );

  const visiblePosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (
      posts
        // .filter((post) => post._id !== featured?._id)
        .filter((post) => post._id)
        .filter(
          (post) =>
            activeCategory === "All" ||
            post.categories.includes(activeCategory),
        )
        .filter(
          (post) =>
            !query ||
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.categories.some((category) =>
              category.toLowerCase().includes(query),
            ),
        )
    );
  }, [posts, featured, activeCategory, search]);

  const featuredMatches =
    !!featured &&
    (activeCategory === "All" ||
      featured.categories.includes(activeCategory)) &&
    `${featured.title} ${featured.excerpt} ${featured.categories.join(" ")}`
      .toLowerCase()
      .includes(search.trim().toLowerCase());

  return (
    <div className="bg-[#f8f9fc]">
      {/* Hero (navy) */}
      <section className="relative isolate overflow-hidden bg-[#0f1f45]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#2f55d4]/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-[#2f55d4]/15 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div>
            <div className="mb-5">
              <Pill tone="dark">MANVYN Insights</Pill>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-[52px]">
              Ideas that move
              <br />
              <span className="text-[#3f68e8]">business forward.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#c3cbe6] sm:text-base">
              Practical perspectives on web development, technology, automation,
              and digital experiences to help you build, scale and stay ahead.
            </p>

            <a
              href="#latest"
              className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#2f55d4] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#3f68e8]"
            >
              Explore Articles <Arrow />
            </a>
          </div>

          <div className="relative mx-auto flex min-h-[250px] w-full max-w-xl items-center justify-center sm:min-h-[330px]">
            <div className="absolute left-[5%] top-[12%] h-44 w-44 rounded-full bg-[#2f55d4]/30 blur-2xl" />
            <div className="absolute right-[2%] top-[5%] h-48 w-48 rounded-full bg-[#4a6fe3]/25 blur-2xl" />

            {featured?.imageUrl ? (
              <img
                src={featured.imageUrl}
                alt=""
                className="relative z-10 h-[240px] w-[85%] rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:h-[300px]"
              />
            ) : (
              <div className="relative z-10 flex h-[240px] w-[85%] items-center justify-center rounded-xl bg-gradient-to-br from-[#0c1745] to-[#2f55d4] text-white shadow-2xl ring-1 ring-white/10 sm:h-[300px]">
                <span className="text-lg font-semibold">MANVYN INSIGHTS</span>
              </div>
            )}

            <div className="absolute left-0 top-[22%] z-20 rounded-lg border border-white/10 bg-[#15245a]/90 p-4 shadow-xl shadow-black/30 backdrop-blur sm:left-[-1%]">
              <p className="text-[10px] font-semibold text-[#8fa8f7]">
                INSIGHTS
              </p>
              <p className="mt-2 text-xs leading-5 text-[#c3cbe6]">
                Technology
                <br />
                Business
                <br />
                Digital solutions
              </p>
            </div>

            <div className="absolute bottom-[8%] right-0 z-20 rounded-lg border border-white/10 bg-[#15245a]/90 p-4 shadow-xl shadow-black/30 backdrop-blur sm:right-[-1%]">
              <p className="text-[10px] font-semibold text-[#8fa8f7]">IDEAS</p>
              <p className="mt-2 text-xs leading-5 text-[#c3cbe6]">
                Execution
                <br />
                Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured article (light) */}
      {featured && (
        <section className="bg-[#f8f9fc]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
            <div className="mb-5">
              <Pill>Editor's pick</Pill>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-md border border-[#dfe4f1] bg-white transition hover:border-[#2f55d4]/40 hover:shadow-lg hover:shadow-[#101e4b]/[0.07] md:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative min-h-[230px] overflow-hidden bg-[#e8edfb] sm:min-h-[270px]">
                {featured.imageUrl ? (
                  <img
                    src={featured.imageUrl}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#101e4b] to-[#2f55d4]" />
                )}
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="w-fit rounded-full bg-[#e8edfb] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#2f55d4]">
                    {featured.categories[0] ?? "Insights"}
                  </span>
                  <span className="text-[10px] text-[#6b7694]">
                    {formatDate(featured.publishedAt)}{" "}
                    <span className="mx-1">·</span>
                    {featured.readTime ?? 5} min read
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#101e4b] transition-colors group-hover:text-[#2f55d4] sm:text-3xl">
                  {featured.title}
                </h2>

                <p className="mt-3 text-xs leading-6 text-[#5a6685] sm:text-sm">
                  {featured.excerpt}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#2f55d4]">
                  Read Article <Arrow className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Latest articles (navy) */}
      <section id="latest" className="bg-[#0f1f45]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4">
                <Pill tone="dark">The latest</Pill>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Explore our insights
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#9aa6c7]">
                Ideas, guides, and perspectives to help you make better
                technology decisions.
              </p>
            </div>

            <label className="flex h-11 w-full items-center gap-3 rounded-md border border-white/15 bg-white/5 px-3 transition focus-within:border-[#4a6fe3] focus-within:ring-4 focus-within:ring-[#2f55d4]/20 sm:max-w-[280px]">
              {/* <SearchIcon /> */}
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full bg-transparent text-xs text-white outline-none placeholder:text-[#7c89b0]"
              />
            </label>
          </div>

          <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-medium transition ${
                  activeCategory === category
                    ? "border-[#2f55d4] bg-[#2f55d4] text-white"
                    : "border-white/15 bg-transparent text-[#b4bedb] hover:border-[#4a6fe3]/60 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visiblePosts.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <div className="rounded-md border border-dashed border-white/20 px-5 py-14 text-center">
              <h3 className="text-base font-semibold text-white">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-[#9aa6c7]">
                Try another category or search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-sm font-semibold text-[#8fa8f7] hover:text-white"
              >
                Clear filters
              </button>
            </div>
          )}

          {featuredMatches && featured && (
            <div className="mt-5 text-center text-xs text-[#7c89b0]">
              Featured article shown above.
            </div>
          )}
        </div>
      </section>

      {/* CTA (light, bordered box like the About page) */}
      <CTA />
    </div>
  );
}

function CTA() {
  const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return (
    <section className="bg-[#f8f9fc] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#2f55d4]/80 bg-gradient-to-br from-white via-white to-[#eef2fd] px-6 py-10 text-center sm:px-10 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/6 h-48 w-[60%] -translate-x-1/2 rounded-full bg-[#2f55d4]/20 blur-3xl"
        />

        <div className="relative">
          <Pill>Let's talk</Pill>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#101e4b] sm:text-4xl">
            Let's build something
            <br className="hidden sm:block" /> meaningful.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-[#5a6685] sm:text-sm">
            Have an idea, a business challenge or a project in mind? Let's talk
            about what you want to build.
          </p>

          <Link
            href={`${WEBSITE_URL}/start-project` || "/"}
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#2f55d4] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#244bc4]"
          >
            Let's Talk <Arrow className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-5/5 h-48 w-[60%] -translate-x-1/2 rounded-full bg-[#2f55d4]/20 blur-3xl"
        />
      </div>
    </section>
  );
}
