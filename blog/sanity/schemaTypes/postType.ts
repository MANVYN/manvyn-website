
// import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  // icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary displayed on blog cards and search results.",
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "height",
          title: "Display Height (px)",
          type: "number",
          initialValue: 480,
          validation: (Rule) => Rule.min(100).max(1200),
        },
        {
          name: "fit",
          title: "Image Fit",
          type: "string",
          options: {
            list: [
              { title: "Cover (crop to fill)", value: "cover" },
              { title: "Contain (show entire image)", value: "contain" },
            ],
            layout: "radio",
          },
          initialValue: "cover",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "category" }],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      description: "Only posts with a publication date in the past appear publicly.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "readTime",
      title: "Reading Time (minutes)",
      type: "number",
      description: "Estimated reading time, e.g. 5 or 8 minutes.",
      initialValue: 5,
      validation: (Rule) => Rule.required().integer().min(1).max(120),
    }),

    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Display this post in the featured article section.",
      initialValue: false,
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Optional title for search engines. Falls back to the post title.",
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Optional search-result description.",
      validation: (Rule) => Rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      featured: "featured",
    },
    prepare(selection) {
      const { author, featured } = selection;

      return {
        ...selection,
        subtitle: [
          author && `by ${author}`,
          featured && "Featured",
        ]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
