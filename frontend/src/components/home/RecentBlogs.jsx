import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { sanityClient } from "../../lib/sanity";

const BLOG_URL = `${import.meta.env.VITE_BLOG_URL}/blog`;

const RECENT_BLOGS_QUERY = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage {
      asset->{ url },
      alt
    },
    "categories": categories[]->title
  }
`;

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function RecentBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchPosts() {
      try {
        const result = await sanityClient.fetch(RECENT_BLOGS_QUERY);

        console.log("Sanity blog posts:", result);

        if (active) {
          setPosts(result);
        }
      } catch (error) {
        console.error("Failed to fetch recent blogs:", error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      active = false;
    };
  }, []);

  if (!loading && posts.length === 0) {
    return null;
  }


return (
  <section className="relative overflow-hidden bg-[#0f1f45] py-20 sm:py-24">
    {/* Subtle background glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#2447b8]/15 blur-[120px]"
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8da8ff]">
            Insights & Ideas
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Perspectives for what&apos;s next.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#a5b1d0] sm:text-base">
            Practical ideas on technology, digital products, and creating
            better digital experiences.
          </p>
        </div>

        <a
          href={BLOG_URL}
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-[#6f8fff]/60 hover:bg-white/5"
        >
          View all articles
          <ArrowRight
            size={16}
            className="text-[#91aaff] transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Blog cards */}
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111f49]"
            >
              <div className="aspect-[16/10] bg-white/[0.06]" />
              <div className="space-y-4 p-6">
                <div className="h-3 w-24 rounded bg-white/10" />
                <div className="h-6 rounded bg-white/10" />
                <div className="h-4 rounded bg-white/[0.06]" />
                <div className="h-4 w-2/3 rounded bg-white/[0.06]" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post._id} className="group">
              <a
                href={`${BLOG_URL}/${post.slug}`}
                aria-label={`Read ${post.title}`}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#14234f] to-[#101c40] transition duration-300 hover:-translate-y-1 hover:border-[#6486ff]/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101c40]">
                  {post.mainImage?.asset?.url ? (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#14234f] via-[#1b3477] to-[#3155cc]">
                      <span className="text-xs font-semibold tracking-[0.22em] text-white/70">
                        MANVYN
                      </span>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1538]/45 via-transparent to-transparent" />

                  {post.categories?.[0] && (
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#0b1538]/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#c1d0ff] backdrop-blur-md">
                      {post.categories[0]}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  {/* Metadata */}
                  
                  <h3 className="mt-1 line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#a8bbff] sm:text-xl">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#a5b1d0] mb-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read link */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-3">
                    {/* <span className="text-sm font-medium text-[#c2cfff] transition-colors group-hover:text-white">
                      Read article
                    </span> */}

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#91a0c5]">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                    )}

                    {post.publishedAt && post.readTime && (
                      <span className="h-1 w-1 rounded-full bg-[#6276a8]" />
                    )}

                    {post.readTime && (
                      <span>{post.readTime} min read</span>
                    )}
                  </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#a8bbff] transition duration-300 group-hover:border-[#6486ff]/50 group-hover:bg-[#3155cc] group-hover:text-white">
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:-rotate-45"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-[#111f49] px-6 py-12 text-center">
          <h3 className="text-lg font-semibold text-white">
            New insights are on the way.
          </h3>
          <p className="mt-2 text-sm text-[#a5b1d0]">
            Check back soon for our latest articles.
          </p>
        </div>
      )}

      {/* Bottom link for mobile */}
      {!loading && posts.length > 0 && (
        <div className="mt-8 text-center sm:hidden">
          <a
            href={BLOG_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#3155cc] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4267e8]"
          >
            Explore all articles
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  </section>
);

}