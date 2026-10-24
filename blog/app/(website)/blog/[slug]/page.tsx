import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {createImageUrlBuilder} from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

import Link from "next/link";
import { format } from "date-fns";
import { connection } from "next/server";

import { BLOG_DETAIL_QUERY } from "@/sanity/lib/queries";

import PortableTextRenderer from "@/components/PortableTextRenderer";
import NotFound from "@/app/not-found";
import WebsiteShell from "@/components/WebsiteShell";

const SITE_URL = "https://www.manvyn.com";

const builder = createImageUrlBuilder(client);

function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}


type Props = {
  params: Promise<{ slug: string }>;
};

// Generate dynamic SEO metadata for each blog post
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(
    BLOG_DETAIL_QUERY,
    { slug },
    { next: { revalidate: 60 } },
  );

  if (!post) {
    return {
      title: "Blog Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seoTitle || post.title;

  const description =
    post.seoDescription ||
    post.excerpt ||
    `Read ${post.title} on the MANVYN blog.`;

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).auto("format").url()
    : undefined;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "MANVYN",
      title,
      description,
      publishedTime: post.publishedAt,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      <div className="bg-[#101e4b]">
        <div className="mx-auto max-w-5xl animate-pulse px-6 py-16 sm:py-24">
          <div className="mb-8 h-4 w-32 rounded bg-white/20" />
          <div className="mb-5 h-10 max-w-3xl rounded bg-white/20 sm:h-14" />
          <div className="mb-3 h-5 max-w-2xl rounded bg-white/10" />
          <div className="h-4 w-48 rounded bg-white/10" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl animate-pulse px-6 py-10 sm:py-14">
        <div className="h-64 rounded-2xl bg-slate-200 sm:h-[480px]" />
        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          <div className="h-5 rounded bg-slate-200" />
          <div className="h-5 rounded bg-slate-200" />
          <div className="h-5 w-4/5 rounded bg-slate-200" />
        </div>
      </div>
    </main>
  );
}

export default function BlogPostPage({ params }: Props) {
  return (
    <Suspense fallback={<BlogPostLoading />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}

async function BlogPostContent({ params }: Props) {
  await connection();

  const { slug } = await params;

  const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;


  const post = await client.fetch(
    BLOG_DETAIL_QUERY,
    { slug },
    { next: { revalidate: 60 } },
  );

  // if (!post) {
  //   notFound();
  // }
  if (!post) {
    return <NotFound />;
  } 

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1400).auto("format").url()
    : null;

  return (
    <WebsiteShell>
    <main className="bg-[#f8f9fc]">
      {/* Blog hero */}
      <header className="relative isolate overflow-hidden bg-[#101e4b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#2f55d4]/30 blur-3xl"
        />

        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-14 sm:pb-32">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to blog
          </Link>

          {post.categories?.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/65">
            {post.author?.name && (
              <span className="font-medium text-white/90">
                {post.author.name}
              </span>
            )}

            {post.publishedAt && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
              </>
            )}

            {post.readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Blog content */}
      <article className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        {imageUrl && (
          <figure className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:relative sm:z-10 sm:-mt-30">
            <img
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              className="block w-full"
              style={{
                height: `${post.mainImage?.height ?? 480}px`,
                objectFit: post.mainImage?.fit ?? "cover",
                objectPosition: "center",
              }}
            />
          </figure>
        )}

        <div
          className="
            mx-auto mt-10 max-w-3xl
            text-base leading-8 text-slate-700
            [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-slate-900
            [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900
            [&_p]:mb-6
            [&_strong]:font-semibold [&_strong]:text-slate-900
            [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-4
            [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-slate-600
            [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
            [&_li]:pl-1
            [&_img]:my-8 [&_img]:rounded-xl
          "
        >
          {post.body && <PortableTextRenderer value={post.body} />}
        </div>

        {/* CTA */}
        <section className="mt-16 overflow-hidden rounded-2xl bg-[#101e4b] px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Let&apos;s build a digital experience that moves your business
            forward.
          </p>

          <Link
            href={`${WEBSITE_URL}/start-project` || '/'}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#101e4b] transition hover:bg-blue-50"
          >
            Start a project
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </article>
    </main>
    </WebsiteShell>
  );
}