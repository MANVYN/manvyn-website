
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

import { BLOG_LIST_QUERY } from "@/sanity/lib/queries";
import BlogListing, { type BlogPost } from "@/components/BlogListing";

const builder = createImageUrlBuilder(client);

function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: Parameters<typeof builder.image>[0];
  categories?: string[];
  publishedAt: string;
  readTime?: number;
  featured?: boolean;
};

export const metadata = {
  title: "Insights & Resources",
  description:
    "Explore MANVYN insights on web development, technology, automation, and digital solutions.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const sanityPosts = (await client.fetch(
    BLOG_LIST_QUERY,
    {},
    { next: { revalidate: 60 } }
  )) as SanityPost[];

  const posts: BlogPost[] = sanityPosts.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? "",
    imageUrl: post.mainImage
      ? urlFor(post.mainImage).width(1200).auto("format").url()
      : null,
    categories: post.categories ?? [],
    publishedAt: post.publishedAt,
    readTime: post.readTime ?? null,
    featured: post.featured ?? false,
  }));

  return <BlogListing posts={posts} />;
}
