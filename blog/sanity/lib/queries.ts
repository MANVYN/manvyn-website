import { defineQuery } from "next-sanity";

export const BLOG_LIST_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      height,
      fit
    },
    "categories": categories[]->title,
    publishedAt,
    readTime,
    featured,
    seoTitle,
    seoDescription
  }
`);

export const BLOG_DETAIL_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug &&
    defined(publishedAt) &&
    publishedAt <= now()
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      height,
      fit
    },
    "categories": categories[]->title,
    publishedAt,
    readTime,
    body,
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    seoTitle,
    seoDescription
  }
`);
